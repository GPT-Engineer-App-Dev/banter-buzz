import { useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const servers = [
    { id: 1, name: "Server 1", icon: "S1" },
    { id: 2, name: "Server 2", icon: "S2" },
  ];

  const channels = [
    { id: 1, name: "General", description: "General chat" },
    { id: 2, name: "Random", description: "Random chat" },
  ];

  const users = [
    { id: 1, name: "User 1", status: "online" },
    { id: 2, name: "User 2", status: "offline" },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: "You", content: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-full">
      <nav className="w-16 bg-gray-800 text-white flex flex-col items-center py-4">
        {servers.map((server) => (
          <Tooltip key={server.id} content={server.name}>
            <Button
              variant="ghost"
              className="mb-4"
              onClick={() => setSelectedServer(server.id)}
            >
              {server.icon}
            </Button>
          </Tooltip>
        ))}
      </nav>
      <nav className="w-48 bg-gray-700 text-white flex flex-col py-4">
        {channels.map((channel) => (
          <Tooltip key={channel.id} content={channel.description}>
            <Button
              variant="ghost"
              className="mb-2"
              onClick={() => setSelectedChannel(channel.id)}
            >
              {channel.name}
            </Button>
          </Tooltip>
        ))}
      </nav>
      <div className="flex-1 flex flex-col bg-gray-600 text-white p-4">
        <div className="flex-1 overflow-auto">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <strong>{message.user}:</strong> {message.content}
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 mr-2"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
      <nav className="w-48 bg-gray-700 text-white flex flex-col py-4">
        {users.map((user) => (
          <Tooltip key={user.id} content={user.status}>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
              {user.name}
            </div>
          </Tooltip>
        ))}
      </nav>
    </div>
  );
};

export default Index;