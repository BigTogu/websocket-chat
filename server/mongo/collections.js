import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import client from "./connection.js";

// Crea el esquema de la colección
const messagesSchema = new mongoose.Schema({
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

// Crea el modelo de la colección dentro de client
const MessageModel = client.model("Message", messagesSchema);

export default MessageModel;
