import { MongoClient } from "mongodb";

const connectToDatabase = async (db_name?: string) => {
  const { MONGODB_URI, NODE_ENV } = process.env;
  const client = await MongoClient.connect(
    NODE_ENV == "production" && MONGODB_URI
      ? MONGODB_URI
      : "mongodb://127.0.0.1:27017"
  );
  return client;
};

export default connectToDatabase;
// since this is used by serverless function i need to close the connection after using it.
