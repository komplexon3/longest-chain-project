import { useEffect, useRef, useState } from "react";
import { eventpb } from "../gen/eventpb/eventpb";

export const useWebsocketListener = (
  url: string,
  messageHandler: (event: eventpb.Event) => void,
  binaryType?: BinaryType
) => {
  const connection = useRef<WebSocket | null>(null);
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
      messageHandler(
        eventpb.Event.deserializeBinary(new Uint8Array(event.data))
      );
    });

    connection.current = socket;

    // return () => connection.close();
  }, []);

  return { status: status };
};
