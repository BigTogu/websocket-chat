import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import { getChatMessages, insertChatMessages } from "./mongo/queries.js";
import { type } from "os";

const app = express();
const httpServer = http.createServer(app);
const options = { cors: { origin: "http://localhost:5173" } };
const io = new SocketServer(httpServer, options);

let messages = [];

await getChatMessages().then((messages) => {
  return messages;
});

// Action when connection is based
io.on("connection", (socket) => {
  socket.emit("messages", messages);
  socket.on("new-message", (data) => {
    insertChatMessages(data);
    messages.push(data);
    // Permite que los mensajes se vean en la misma pantalla
    socket.emit("messages", messages);
    // Permite que los mensajes se vean en todas las pantallas
    socket.broadcast.emit("messages", messages);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
