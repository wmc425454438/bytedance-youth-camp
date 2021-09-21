(async () => {

    const { MongoClient } = require('mongodb')
    const client = new MongoClient(
        'mongodb://localhost:27017',
        {
            useNewUrlParser: true
        }
    )
    await client.connect();
    const db = client.db('test');
    
    const fruits = db.collection('fruits');

    ret = await fruits.insertOne({
        name: 'mangguo',
        price: 20.1
    });

    console.log('insert', ret);
})()