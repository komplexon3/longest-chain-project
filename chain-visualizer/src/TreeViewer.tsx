import useWebSocket, { ReadyState } from "react-use-websocket";
import { blockchainpb } from "./gen/blockchainpb/blockchainpb";
import React, { useEffect, useMemo, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import dagre from "@dagrejs/dagre";
import { useWebsocketListener } from "./hooks/useWebsocketListener";

const nodeWidth = 160;
const nodeHeight = 40;

// from their docs
const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
const getLayoutedElements = (nodes: any, edges: any, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node: any) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge: any) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node: any) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

export default function TreeViewer(props: { port: string }) {
  const { port } = props;
  const { data, status } = useWebsocketListener(
    `ws://localhost:${port}/ws`,
    "arraybuffer"
  );

  // get the return type of blockchainpb.Blocktree.toObject()
  type Blocktree = ReturnType<typeof blockchainpb.Blocktree.prototype.toObject>;
  const [treeHistory, setTreeHistory] = useState<Blocktree[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    if (!data) {
      return;
    }
    try {
      const _tree = blockchainpb.Blocktree.deserializeBinary(
        new Uint8Array(data)
      );

      setTreeHistory([...treeHistory, _tree.toObject()]);
      setHistoryIndex(treeHistory.length);
    } catch (e) {
      console.error(e);
    }
    // don't want to run on addition to treeHistory
    // ugly but can be fixed later
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const blockTree = treeHistory[historyIndex];

  const nodes = useMemo(() => {
    if (!blockTree || !blockTree.blocks) {
      return [];
    }

    return blockTree.blocks.map((block) => ({
      id: block.block_id?.toString(),
      data: { label: block.block_id?.toString().substring(0, 5) },
      position: { x: 0, y: 0 },
    }));
  }, [blockTree]);

  const edges = useMemo(() => {
    if (!blockTree || !blockTree.blocks) {
      return [];
    }

    return blockTree.blocks.map((block) => ({
      id: `${block.block_id}-${block.previous_block_id}`,
      source: block.block_id?.toString(),
      target: block.previous_block_id?.toString(),
    }));
  }, [blockTree]);

  // const nodes = useMemo(
  //   () => [
  //     { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  //     { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
  //     { id: "3", position: { x: 400, y: 400 }, data: { label: "3" } },
  //     { id: "4", position: { x: 600, y: 600 }, data: { label: "4" } },
  //     { id: "5", position: { x: 800, y: 800 }, data: { label: "5" } },
  //   ],
  //   []
  // );

  // const edges = useMemo(
  //   () => [
  //     { id: "1-2", source: "1", target: "2" },
  //     { id: "2-3", source: "2", target: "3" },
  //     { id: "2-4", source: "2", target: "4" },
  //     { id: "4-5", source: "4", target: "5" },
  //   ],
  //   []
  // );

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
    if (nodes?.length === 0 || edges?.length === 0) {
      return { nodes: [], edges: [] };
    }
    return getLayoutedElements(nodes, edges);
  }, [nodes, edges]);

  return (
    <div className="h-full w-full">
      <h1 className="text-3xl font-bold underline">Chain Viewer</h1>
      <h2 className="text-xl font-bold">Status: {status}</h2>
      {/* <h2 className="text-xl font-bold">Last message:</h2> */}
      <div className="flex gap-2">
        <button
          className="px-2 border-2 border-gray-600 bg-gray-400 disabled:opacity-50"
          disabled={historyIndex <= 0}
          onClick={() => setHistoryIndex(historyIndex - 1)}
        >
          Prev
        </button>
        <span>
          {historyIndex + 1}/ {treeHistory.length}
        </span>
        <button
          className="px-2 border-2 border-gray-600 bg-gray-400 disabled:opacity-50"
          disabled={historyIndex >= treeHistory.length - 1}
          onClick={() => setHistoryIndex(historyIndex + 1)}
        >
          Next
        </button>
      </div>
      {/* {blockTree && (
        <pre className="text-sm">{JSON.stringify(blockTree, null, 2)}</pre>
      )} */}
      <div className="h-full w-full">
        <ReactFlow nodes={layoutedNodes} edges={layoutedEdges} />
      </div>
    </div>
  );
}
