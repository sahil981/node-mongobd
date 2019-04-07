const {MongoClient, ObjectID} = require('mongodb'); //ES6 destructuring

MongoClient.connect('mongodb://localhost:27017/TotoApp', (err, client)=>{
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    var db = client.db('mytestingdb');

    // db.collection('Todos').find({completed: 'true'}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined ,2));
    // }, (err)=>{
    //     console.log('Unable to fetch',err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos Count : ${count}`)
    }, (err)=>{
        console.log('Unable to fetch',err);
    });

    client.close();
});