import { MongoClient } from 'mongodb';
const url =
  'mongodb+srv://tamas:marina@cluster0-5egxc.mongodb.net/test?retryWrites=true&w=majority';

let client;
export default async function getClient() {
  if (!client) {
    console.log('No client, connecting to database ...');
    client = await MongoClient.connect(url, { useUnifiedTopology: true });
    return client;
  }
  console.log('Client already exists, reusing ...');
  return client;
}
