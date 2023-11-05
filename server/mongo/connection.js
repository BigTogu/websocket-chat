import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as url from "url";
import mongoose from "mongoose";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
dotenv.configDotenv();

// Configura las variables de entorno desde el archivo .env.local
dotenv.config({ path: __dirname + "../.env.local" });
// mongoose.set("bufferCommands", false);
//createConnection se ha convertido en async cuando antes no lo era y he puesto bufferCommands = false, por eso pongo ahora await
export const clientBase = mongoose.createConnection(
  process.env.MONGODB_CONNECTION_STRING
);

const client = clientBase.useDb("local");

//para conectarse a la base de datos mediante mongo y no mongoose
// const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

export default client;
