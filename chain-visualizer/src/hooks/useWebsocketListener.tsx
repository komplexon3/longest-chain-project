import { useEffect, useRef, useState } from "react";

export const useWebsocketListener = (url: string, binaryType?: BinaryType) => {
  const connection = useRef<WebSocket | null>(null);
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState("CLOSED");

  useEffect(() => {
    const socket = new WebSocket(url);
    if (binaryType) {
      socket.binaryType = binaryType;
    }

    // Connection opened
    socket.addEventListener("open", (event) => {
      console.log("Connection established");
      setStatus("OPEN");
    });

    socket.addEventListener("close", (event) => {
      console.log("Connection lost");
      setStatus("CLOSED");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
      setData(event.data);
    });

    connection.current = socket;

    // return () => connection.close();
  }, []);

  return { data: data, status: status };
};
