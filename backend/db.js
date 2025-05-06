// db.js
// MongoDB connection setup
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
const dbName = process.env.MONGODB_DB || 'hackathonDB';

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// For easy access to the database connection
let dbConnection = null;

export async function getDB() {
  if (!dbConnection) {
    dbConnection = await connectDB();
  }
  return dbConnection;
}

export { client };


