import client, { clientBase } from "./connection.js";
import { ObjectId } from "mongodb";
import MessageModel from "./collections.js";

export async function insertChatMessages(message) {
  try {
    const newMessage = new MessageModel({
      author: message.author,
      contenido: message.contenido,
      // sala: message.sala
      // 'timestamp' se asigna automáticamente a la fecha actual
    });

    //permite añadir el mensaje(entrada nueva) a la collection MessageModel(messages) que está dentro de la local db especificada en connection.js
    MessageModel.collection.insertOne(newMessage);
  } catch (err) {
    console.log(err);
  } finally {
    // hgola
  }
}

// export async function getChatMessages(chat = null) {
//   // try {
//   // await client.connect();
//   // const database = client.db("local");
//   // const messages = database.collection("messages");
//   // const allMessages = await messages.find().toArray();
//   // return allMessages;
//   // } catch (err) {
//   //   console.log(err);
//   // } finally {
//   //   await client.close();
//   // }
// }

export default client;

// permite conectarse a la base de datos
// await client.connect();
// const database = client.db("local");
// const messages = database.collection("messagesPrueba");

// await messages.insertOne({
//   author: message.author,
//   // contenido: message.contenido,
// });
