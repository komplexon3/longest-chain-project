import { useMemo, useState } from "react";
import ReactFlow, { Node, NodeProps } from "reactflow";
import "reactflow/dist/style.css";
import dagre from "@dagrejs/dagre";
import { useWebsocketListener } from "./hooks/useWebsocketListener";
import { interceptorpb } from "./gen/blockchainpb/interceptorpb/interceptorpb";
import { blockchainpb } from "./gen/blockchainpb/blockchainpb";

const nodeWidth = 160;
const nodeHeight = 50;

type Block = ReturnType<typeof blockchainpb.Block.prototype.toObject>;

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

const colorComponent = (component: number) => {
  const c = 50 + Math.floor((component / 100) * 205);
  return c.toString(16);
};

const nodeIdToColor = (nodeId: string) => {
  const rRaw = +nodeId.substring(0, 2);
  const gRaw = +nodeId.substring(2, 4);
  const bRaw = +nodeId.substring(4, 6);

  const c = `#${colorComponent(rRaw)}${colorComponent(gRaw)}${colorComponent(
    bRaw
  )}`;
  return c;
};

function BlockNode(props: NodeProps<Block>) {
  const { block_id, payload } = props.data;
  let bgColor = "transparent";
  switch (payload?.sender) {
    case "0":
      bgColor = "red";
      break;
    case "1":
      bgColor = "green";
      break;
    case "2":
      bgColor = "yellow";
      break;
    case "3":
      bgColor = "orange";
      break;
  }

  return (
    <div className="flex font-mono " key={block_id}>
      {payload?.sender && (
        <div
          className="px-3 items-center flex text-xl font-bold"
          style={{ backgroundColor: bgColor }}
        >
          {payload?.sender}
        </div>
      )}
      <div className="text-center px-3">
        <h1 className="text-xl">{block_id?.toString().substring(0, 6)}</h1>
        <p className="text-lg">
          {payload && payload.timestamp
            ? new Date(
                payload.timestamp!.seconds! * 1000 +
                  payload.timestamp!.nanos! / 1000000
              )
                .toISOString()
                .split("T")[1]
                .split("Z")[0]
            : "---"}
        </p>
        <p className="text-lg">{payload?.message || "---"}</p>
      </div>
    </div>
  );
}

export default function TreeViewer(props: { port: string }) {
  const { port } = props;
  const [treeState, setTreeState] = useState<
    ReturnType<typeof interceptorpb.TreeUpdate.prototype.toObject> | undefined
  >(undefined);

  const [orphans, setOrphans] = useState<number[]>([]);
  const [state, setState] = useState<string[]>([]);

  const { status } = useWebsocketListener(
    `ws://localhost:${port}/ws`,
    (event) => {
      if (event.type !== "bcinterceptor") {
        console.error("Unexpected event type", event.type);
        return;
      }
      switch (event.bcinterceptor?.type) {
        case "tree_update":
          setTreeState(event.bcinterceptor.tree_update);
          // remove orphans that are now part of the tree
          setOrphans((old) =>
            old.filter(
              (orphan) => !(orphan in event.bcinterceptor.tree_update.blocks)
            )
          );
          break;
        case "state_update":
          setState(event.bcinterceptor.state_update.state.message_history);
          break;

        default:
          break;
      }
    },
    "arraybuffer"
  );

  const head_id = treeState?.head_id;
  const blocksMap = (treeState?.blocks ?? []).reduce((acc, node) => {
    if (!node.block_id) {
      // should never happen
      return acc;
    }
    acc[node.block_id] = node;
    return acc;
  }, {} as { [key: string]: Block });

  const nodes: Node<Block>[] = useMemo(
    () =>
      treeState?.blocks?.map((block) => ({
        id: block.block_id!.toString(), // should always be defined
        type: "blockNode",
        data: block,
        position: { x: 0, y: 0 },
      })) ?? [],
    [treeState]
  );

  const edges = useMemo(() => {
    return treeState?.blocks?.map((block) => ({
      id: `${block.block_id}-${block.previous_block_id}`,
      source: block.block_id?.toString(),
      target: block.previous_block_id?.toString(),
    }));
  }, [treeState]);

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
    if (nodes?.length === 0 || edges?.length === 0) {
      return { nodes: [], edges: [] };
    }
    const layouted = getLayoutedElements(nodes, edges);
    layouted.nodes = layouted.nodes.map((n: Node<Block>) => ({
      ...n,
      style: {
        backgroundColor: nodeIdToColor(n.id),
        borderColor: n.data.block_id === head_id ? "red" : "gray",
        borderWidth: "0.250rem",
      },
    }));

    return layouted;
  }, [nodes, edges]);

  return (
    <div className="h-full w-full">
      <h1 className="text-3xl font-bold underline">Chain Viewer</h1>
      <h2 className="text-xl font-bold">Status: {status}</h2>
      <h3>STATE</h3>
      <div className="h-36 overflow-y-scroll border-2 px-2">
        {state.map((msg) => (
          <p>{msg}</p>
        ))}
      </div>
      <h3>
        {head_id && (
          <span>
            HEAD: {head_id.toString().substring(0, 6)}, Payload:{" "}
            {blocksMap[head_id]?.payload?.message}
          </span>
        )}
      </h3>
      <p>
        Orphans: {orphans.map((o) => o.toString().substring(0, 6)).join(", ")}
      </p>
      <div className="h-full w-full">
        <ReactFlow
          nodes={layoutedNodes}
          edges={layoutedEdges}
          nodeTypes={{ blockNode: BlockNode }}
        />
      </div>
    </div>
  );
}
