import getClient from './_db';
import { ObjectID } from 'mongodb';

export default async (req, res) => {
  const {
    query: { id }
  } = req;

  const client = await getClient();
  const db = client.db('jamstack');
  const col = db.collection('contacts');
  const data = await col.findOne({ _id: ObjectID(id) });
  return res.json({
    data
  });
};
