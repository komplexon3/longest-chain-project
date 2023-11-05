import { useMemo } from "react";
import TreeViewer from "./TreeViewer";

export default function App() {
  const ports = useMemo(() => {
    const ports = [];
    const params = new URLSearchParams(window.location.search);
    const count = parseInt(params.get("count") || "1");

    for (let i = 0; i < count; i++) {
      const port = 8080 + i;
      ports.push(port);
    }
    return ports;
  }, []);

  return (
    <div className="h-screen w-screen flex p-2 gap-2">
      {ports.map((port) => (
        <div className="p-2 border-2 w-full border-gray-400">
          <TreeViewer key={port} port={port.toString()} />
        </div>
      ))}
    </div>
  );
}
