import io from "socket.io-client";
import { BsSend } from "react-icons/bs";
import clsx from "clsx";

const socket = io("http://localhost:3000"); //conéctate al backend

// Parte de la conversación del chat
const ConversationChat = ({ messages }) => (
  <div className="flex-1 pl-7">
    {messages.map((e, index) => (
      <div key={index} className="my-3">
        <p>
          <strong>{e.author}:</strong> {e.contenido}
        </p>
      </div>
    ))}
  </div>
);
// Footer del chat, para enviar mensaje
const SendMessage = ({ username, newMessage, setNewMessage }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //si el mensaje está vacío, no hagas nada
    if (!newMessage) return;
    //envía el mensaje al servidor
    socket.emit("new-message", { author: username, contenido: newMessage });
    setNewMessage("");
  };
  return (
    <div className="flex-none w-full flex items-center bg-[#cbd2d5] pl-7">
      <input
        type="text"
        name="message"
        value={newMessage}
        placeholder="Escribe un mensaje..."
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        className="flex-1 bg-[#d3dde3] rounded-md focus:outline-none my-2 pl-2"
      />

      <BsSend
        onClick={handleSubmit}
        className={clsx(
          `mx-3 `,
          !newMessage ? "opacity-40" : "cursor-pointer hover:text-[#818a8d]"
        )}
      />
    </div>
  );
};

// Header chat
const ChatInfo = () => (
  <header>
    <div className="flex-none flex gap-2 pl-7">
      <img
        src={"assets/avatar_joseph.jpeg"}
        alt="avatar-joseph"
        className="rounded-full h-6 w-6 object-cover flex-shrink-0"
      />
      <h2 className="">Chat 1</h2>
    </div>
    <span className="block h-[2px] bg-[#d3dde3] w-full mt-1.5" />
  </header>
);

export const ChatMessages = ({
  messages,
  newMessage,
  setNewMessage,
  username,
}) => {
  return (
    <section className="flex flex-col  bg-[#b0bbc1] w-3/4 pt-7">
      <ChatInfo />

      <ConversationChat messages={messages} />
      <SendMessage
        username={username}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        style={{ alignSelf: "flex-end" }}
      />
    </section>
  );
};
export default ChatMessages;
