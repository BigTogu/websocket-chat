import client, { clientBase } from "./connection.js";
import { ObjectId } from "mongodb";
import MessageModel from "./collections.js";

export async function insertChatMessages(message) {
  try {
    // Create an instance of model MessageModel and save it (hace los dos pasos directamente). 1-const newMessage = new MessageModel({...}) 2-await newMessage.save();
    await MessageModel.create({
      author: message.author,
      contenido: message.contenido,
      // sala: message.sala
      // 'timestamp' se asigna automáticamente a la fecha actual
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getChatMessages(chat = null) {
  try {
    // Permite obtener todos los mensajes de la collection MessageModel y te lo guarda en un array.
    // Con el uso de await, se espera a que la promesa se resuelva y el resultado se asigna a la variable allMessages.
    // El método .exec() es una buena práctica para dejar claro que se está ejecutando una consulta de Mongoose
    const allMessages = await MessageModel.find().exec();
    return allMessages;
  } catch (err) {
    console.log(err);
  }
}

export default client;

//insertChatMessages();
// permite conectarse a la base de datos
// await client.connect();
// const database = client.db("local");
// const messages = database.collection("messagesPrueba");
// await messages.insertOne({
//   author: message.author,
//   // contenido: message.contenido,
// });

//getChatMessages();
//mongo normal sin uso de mongoose
// try {
//   const messages = MessageModel.collection.("messages");
//   const allMessages = await messages.find().toArray();
//   console.log(allMessages, "allMessages");
//   return allMessages;
// } catch (err) {
//   console.log(err);
// } finally {
//   await client.close();
// }
