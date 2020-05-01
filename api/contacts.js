import getClient from './_db';

export default async (req, res) => {
  const client = await getClient();
  const db = client.db('jamstack');
  const col = db.collection('contacts');
  const data = await col.find({}).toArray();
  return res.json({
    data
  });
};
