(async () => {
    const db = clinet.db('test');
    
    const fruits = db.collection('fruits');

    ret = await fruits.insertOne({
        name: 'mangguo',
        price: 20.1
    })
})()