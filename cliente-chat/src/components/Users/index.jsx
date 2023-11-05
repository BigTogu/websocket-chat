import { BiSearch } from "react-icons/bi";

const SearchUser = () => (
  <form className="bg-slate-300 flex flex-row items-center rounded-md py-1 mt-3">
    <BiSearch className="flex-shrink-0 w-[14px] mx-2 text-gray-500" />
    <input
      type="text"
      name="search"
      placeholder="buscar aquí..."
      className="w-full mr-3 bg-slate-300 rounded-md focus:outline-none"
    />
  </form>
);

const ChatList = ({ users }) => (
  <ul className="flex flex-col gap-2">
    {users.map((user, index) => (
      <li key={index} className="flex flex-row gap-2">
        <img
          src={"assets/avatar_joseph.jpeg"}
          alt="avatar-joseph"
          className="rounded-full h-6 w-6 object-cover flex-shrink-0"
        />
        <p>{user}</p>
      </li>
    ))}
  </ul>
);

const ChanelList = ({ users }) => (
  <ul className="flex flex-col gap-2">
    {users.map((user, index) => (
      <li key={index} className="flex flex-row gap-2">
        <img
          src={"assets/avatar_joseph.jpeg"}
          alt="avatar-joseph"
          className="rounded-full h-6 w-6 object-cover flex-shrink-0"
        />
        <p>{user}</p>
      </li>
    ))}
  </ul>
);

export const Users = ({ users }) => (
  <section className=" h-full w-1/4 px-2 py-8 bg-[#d3dde3] overflow-scroll">
    <h2>Chats</h2>
    <SearchUser />

    <div className="flex flex-col gap-1.5 mt-8 text-gray-500">
      <h2 className="text-gray-900">Mensajes Directos</h2>
      <ChatList users={users} />
    </div>

    <div className="flex flex-col gap-1.5 mt-8 text-gray-500">
      <h2 className="text-gray-900">Canales</h2>
      <ChanelList users={users} />
    </div>
  </section>
);

export default Users;
