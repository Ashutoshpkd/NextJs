import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const uri = `mongodb+srv://ashutoshpkd:naruto@rest-api.qmaic7m.mongodb.net/nextjs?retryWrites=true&w=majority`;
    if (req.method === 'POST') {
        const body = JSON.parse(req.body);
        const { email } = body;
        console.log('Register req with email - ', email);
        if (!email || !email.includes('@')) {
            return res.status(422).json({message: 'Invalid email!'});
        }
        const client = await MongoClient.connect(uri);
        const db = client.db();
        await db.collection('emails').insertOne({ email });
        client.close();
        const resp = {
            status: 'success',
            message: 'Signed up!',
            email,
        }
        res.status(201).json(resp);
    } else {
        return res.status(404).json({ message: 'Bad request!' });
    }
}

export default handler;