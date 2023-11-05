import client from "./connection.js";
import { ObjectId } from "mongodb";
import MessageModel from "./collections.js";

export async function insertChatMessages(message) {
  console.log(message, "message");
  try {
    const messages = new MessageModel({
      author: message.author,
      contenido: message.contenido,
      // sala: message.sala
      // 'timestamp' se asigna automáticamente a la fecha actual
    });
    //sale bien pero no se guarda en la base de datos
    await messages.save();
    //guardar en la base de datos usando el client que es la base de datos creada mediante mongoose en el archivo connection.js
  } catch (err) {
    console.log(err);
  } finally {
    // await client.close();
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
