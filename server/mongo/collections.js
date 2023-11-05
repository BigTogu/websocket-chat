import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import client from "./connection.js";
//Crea el esquema de la colección
const messagesSchema = new mongoose.Schema({
  // _id: {
  //   type: ObjectId,
  // },
  author: {
    type: "string",
    required: true,
  },
  contenido: {
    type: "string",
    required: true,
  },
  sala: {
    type: "string",
    default: null,
    required: false,
  },
  timestamp: {
    type: "string",
    required: false,
  },
});

// Crear un modelo de Mongoose basado en el esquema definido
// const MessageModel = mongoose.model("Message", messagesSchema);

const MessageModel = client.model("Message", messagesSchema);
// await MessageModel.createCollection();

export default MessageModel;
