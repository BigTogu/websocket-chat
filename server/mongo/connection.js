import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import * as url from "url";
import mongoose from "mongoose";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
dotenv.configDotenv();

// Configura las variables de entorno desde el archivo .env.local
dotenv.config({ path: __dirname + "../.env.local" });

export const clientBase = mongoose.createConnection(
  process.env.MONGODB_CONNECTION_STRING
);
const client = clientBase.useDb("local");

// Para conectarse a la base de datos mediante mongo: const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

export default client;
