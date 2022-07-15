import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();


const mongoClient = new MongoClient(process.env.MONGO_URI);
const objectId= ObjectId
await mongoClient.connect();

const db = mongoClient.db("ScrollNote");
export {db,objectId}