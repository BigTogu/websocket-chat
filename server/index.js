import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import MongoClient from "./mongo/connection.js";
import { insertChatMessages } from "./mongo/queries.js";

const app = express();
const httpServer = http.createServer(app);
const options = { cors: { origin: "http://localhost:5173" } };
const io = new SocketServer(httpServer, options);

// await getChatMessages().then((data) => {
//   messages = data;
// });

// action when connection is based
io.on("connection", (socket) => {
  // socket.emit("messages", messages);
  socket.on("new-message", (data) => {
    console.log(data, "data");
    //está saliendo bien la data, no entiendo que pasa
    insertChatMessages(data);

    // //permite que los mensajes se vean en la misma pantalla
    // socket.emit("messages", data);
    // // permite que los mensajes se vean en todas las pantallas
    // socket.broadcast.emit("messages", data);
  });
});

httpServer.listen(3000, () => {
  console.log("listening on *:3000");
});
