import { Collection, Db, Document, MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI!;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}
export default clientPromise;
export async function getCollection<T extends Document = Document>(
  name: string
): Promise<Collection<T>> {
  const client = await clientPromise;
  const dbName = process.env.MONGODB_DB || "haex";
  const db: Db = client.db(dbName);
  return db.collection<T>(name);
}