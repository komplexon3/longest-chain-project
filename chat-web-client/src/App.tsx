import { useState } from "react";
import useSWR from "swr";
import { cn } from "./utils/cn";

type Message = {
  Sender: string;
  Message: string;
  Timestamp: { seconds: number; nanos: number };
};

type User = {
  name: string;
  id: number;
};

type HistoryResponse = {
  messages: Message[];
};

type SendMessageRequest = {
  message: string;
};

const users: Record<string, User> = {
  alice: {
    name: "Alice",
    id: 0,
  },
  bob: {
    name: "Bob",
    id: 1,
  },
  charlie: {
    name: "Charlie",
    id: 2,
  },
  donna: {
    name: "Donna",
    id: 3,
  },
  eve: {
    name: "Eve",
    id: 4,
  },
};

const idsToUsers = Object.fromEntries(
  Object.entries(users).map((t) => [t[1].id, t[1]]),
);

export default function App() {
  const params = new URLSearchParams(window.location.search);
  if (
    !params.get("user") ||
    !Object.keys(users).includes(params.get("user")!.toLowerCase())
  ) {
    alert(
      "User not specified or invalid. Add ?user=<alice | bob | eve> to the URL",
    );
    throw new Error("User not specified or invalid");
  }

  const [newMsg, setNewMsg] = useState("");
  const user = users[params.get("user")?.toLowerCase() ?? ""];
  const addr = "http://k3-mbp:818" + user.id;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: msgs } = useSWR<Message[], any>(
    addr + "/history",
    (key) =>
      fetch(key)
        .then((res) => res.json())
        .then((res: HistoryResponse) => res.messages),
    { refreshInterval: 1000, fallbackData: [] },
  );

  const sendMessage = async (msg: SendMessageRequest) =>
    fetch(addr + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    });

  const handleNewMsg = () => {
    sendMessage({ message: newMsg });
    setNewMsg("");
  };

  const revMsgs = msgs?.slice().reverse();

  return (
    <div className="flex h-dvh flex-col">
      <div className="border-b border-slate-300 py-2 text-center font-bold">
        <h1 className="text-3xl">Chat Demo</h1>
        <h2 className="text-xl">User: {user.name}</h2>
      </div>
      <div className="flex flex-1 flex-col-reverse gap-1 overflow-y-auto bg-slate-100 p-2">
        {revMsgs?.map((msg, i) => {
          const sentYourself = msg.Sender === user.id.toString();
          return (
            <div
              className={cn("flex w-full flex-col", {
                "items-end": sentYourself,
              })}
            >
              <span className="text-xs text-slate-400">
                {idsToUsers[msg.Sender].name},{" "}
                {new Date(msg.Timestamp.seconds * 1000).toLocaleTimeString(
                  "de-CH",
                  { hour: "2-digit", minute: "2-digit" },
                )}
              </span>
              <div
                key={i}
                className={cn(
                  "w-fit rounded-lg px-2 py-1 text-white shadow-md",
                  {
                    "rounded-br-none bg-green-600": sentYourself,
                    "rounded-bl-none bg-sky-600": !sentYourself,
                  },
                )}
              >
                {msg.Message}
              </div>
            </div>
          );
        })}
      </div>
      <form
        className="flex gap-2 border-t border-slate-300 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleNewMsg();
        }}
      >
        <input
          className="w-full rounded-xl border border-slate-300 px-2 py-1 shadow"
          onChange={(e) => {
            e.preventDefault();
            setNewMsg(e.target.value);
          }}
          value={newMsg}
          placeholder="New Message..."
          autoFocus={true}
        />
        <button
          disabled={newMsg === ""}
          type="submit"
          className="w-fit rounded-xl border border-slate-300 bg-sky-600 px-2 py-1 font-semibold text-white shadow hover:bg-sky-700 disabled:hover:bg-sky-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
