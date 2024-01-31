import { useMemo, useState } from "react";
import ReactFlow, { Handle, Node, NodeProps, Position } from "reactflow";
import "reactflow/dist/style.css";
import dagre from "@dagrejs/dagre";
import { useWebsocketListener } from "./hooks/useWebsocketListener";
import { interceptorpb } from "./gen/blockchainpb/interceptorpb/interceptorpb";
import { blockchainpb } from "./gen/blockchainpb/blockchainpb";

const nodeWidth = 160;
const nodeHeight = 60;

type Block = ReturnType<typeof blockchainpb.Block.prototype.toObject>;

// from their docs
const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
const getLayoutedElements = (nodes: any, edges: any) => {
  dagreGraph.setGraph({ rankdir: "TB" });

  nodes.forEach((node: any) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge: any) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node: any) => {
    const nodeWithPosition = dagreGraph.node(node.id);

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

function BlockNode(props: NodeProps<Block & { isHead: boolean }>) {
  const { id } = props;
  const { isHead, block_id, payload, miner_id } = props.data;
  const bgColorForId = (id?: string) => {
    switch (id) {
      case "0":
        return "red";
      case "1":
        return "green";
      case "2":
        return "yellow";
      case "3":
        return "orange";
      default:
        "transparent";
    }
  };
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <div
        className={`flex font-mono border-4 ${
          isHead ? "border-red-800" : "border-gray-600"
        } ${(!payload || !payload.message) && "opacity-50"}`}
        style={{ backgroundColor: nodeIdToColor(id) }}
        key={block_id}
      >
        <div className="">
          <div
            className="px-3 items-center flex text-xl font-bold h-1/2"
            style={{ backgroundColor: bgColorForId(miner_id) }}
          >
            {miner_id}
          </div>
          <div
            className="px-3 items-center flex text-xl font-bold h-1/2"
            style={{ backgroundColor: bgColorForId(payload?.sender) }}
          >
            {payload?.sender}
          </div>
        </div>
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
    </>
  );
}

const nodeTypes = {
  blockNode: BlockNode,
};

export default function TreeViewer(props: { port: string }) {
  const { port } = props;
  const [treeState, setTreeState] = useState<
    ReturnType<typeof interceptorpb.TreeUpdate.prototype.toObject> | undefined
  >(undefined);

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

  const nodes: Node<Block & { isHead: boolean }>[] = useMemo(
    () =>
      treeState?.blocks
        ?.map((block) => {
          const data = { ...block, isHead: true };
          return {
            id: block.block_id!.toString(), // should always be defined
            type: "blockNode",
            data: block,
            position: { x: 0, y: 0 },
          } as Node<Block & { isHead?: boolean }>;
        })
        .map((n) => {
          n.data.isHead = n.data.block_id === head_id;
          return n;
        }) ?? [],
    [treeState]
  );

  const edges = useMemo(() => {
    return treeState?.blocks?.map((block) => ({
      id: `${block.block_id}-${block.previous_block_id}`,
      source: block.block_id!.toString(),
      target: block.previous_block_id!.toString(),
    }));
  }, [treeState]);

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
      <div className="h-full w-full">
        <ReactFlow
          nodes={layoutedNodes}
          edges={layoutedEdges}
          nodeTypes={nodeTypes}
        />
      </div>
    </div>
  );
}
