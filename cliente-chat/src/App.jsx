import io from "socket.io-client";
import { useState } from "react";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Chat from "./components/Chat";

const socket = io("http://localhost:3000"); //conéctate al backend

function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const [newMessage, setNewMessage] = useState("");
  const [isLoged, setIsLoged] = useState(
    sessionStorage.getItem("username") ? true : false
  );

  socket.on("messages", (data) => {
    setMessages(data);
  });

  return (
    <div>
      {isLoged ? (
        <Chat
          username={username}
          messages={messages}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
        />
      ) : (
        <LoginForm
          username={username}
          setUsername={setUsername}
          setIsLoged={setIsLoged}
        />
      )}
    </div>
  );
}

export default App;
