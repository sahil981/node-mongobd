const {MongoClient, ObjectID} = require('mongodb'); //ES6 destructuring

MongoClient.connect('mongodb://localhost:27017/TotoApp', (err, client)=>{
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    var db = client.db('mytestingdb');

    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5caa04638997387b6ed1fd4e')
    }, {
            $set: {
                completed: true,
                another: "Test field",
                name : 'Sahil Deep Mehra'
            }
        }, false).then((result)=>{
        console.log(result);
    });

    // client.close();
});