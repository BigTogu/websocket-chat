import ChatMessages from "../ChatMessages";
import Users from "../Users";

export const Chat = ({ username, messages, newMessage, setNewMessage }) => {
  const users = [
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
  ];
  return (
    <main className="flex flex-row h-[100vh] w-[100vw]">
      <Users users={users} />

      <ChatMessages
        messages={messages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        username={username}
      />
    </main>
  );
};

export default Chat;
