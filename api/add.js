import getClient from './_db';

export default async (req, res) => {
  const client = await getClient();
  const db = client.db('jamstack');
  const col = db.collection('contacts');

  const { body } = req;

  try {
    await col.insertOne(JSON.parse(body));
    return res.json({
      success: true
    });
  } catch (error) {
    return res.json({
      success: false,
      error
    });
  }
};
