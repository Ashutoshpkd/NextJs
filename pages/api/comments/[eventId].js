import { MongoClient } from 'mongodb';
async function handler(req, res) {
    const uri = `mongodb+srv://ashutoshpkd:naruto@rest-api.qmaic7m.mongodb.net/nextjs?retryWrites=true&w=majority`;
    const { eventId } = req.query;
    console.log('Req started for eventId - ', eventId, req.method);
    if (req.method === 'POST') {
        const comment = JSON.parse(req.body);
        const client = await MongoClient.connect(uri);
        const db = client.db();
        const savedCommentId = await db.collection('comments').insertOne(comment);
        client.close();
        console.log('Comment saved  to db success - ', savedCommentId.insertedId);
        res.status(201).json({id: savedCommentId.insertedId, ...comment });
    } else if (req.method === 'GET') {
        const comments = [
            {
                id: 'c1',
                name: 'Ashutosh',
                text: 'My first comment',
            },
            {
                id: 'c2',
                name: 'Ashu',
                text: 'My second comment',
            }
        ];
        console.log('Req completed for fetching comments - ', comments);
        res.status(200).json(comments);
    }
};

export default handler;