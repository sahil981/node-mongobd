const {MongoClient, ObjectID} = require('mongodb'); //ES6 destructuring

MongoClient.connect('mongodb://localhost:27017/TotoApp', (err, client)=>{
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    var db = client.db('mytestingdb');


    db.collection('Todos').deleteMany({name :"Sahil Deep Mehra"}).then((docs)=>{
        console.log(docs);
    });

    db.collection('Todos').findOneAndDelete({name: 'Sahil Deep'}).then((result)=>{
        console.log(result)
    });

    // client.close();
});