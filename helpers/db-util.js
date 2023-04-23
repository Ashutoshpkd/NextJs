import { MongoClient } from 'mongodb';
const uri = `mongodb+srv://ashutoshpkd:naruto@rest-api.qmaic7m.mongodb.net/nextjs?retryWrites=true&w=majority`;
export async function connectDatabase() {
  const client = await MongoClient.connect(uri);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

  return documents;
}