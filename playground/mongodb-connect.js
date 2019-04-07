// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //ES6 destructuring
// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TotoApp', (err, client)=>{
    if(err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    var db = client.db('mytestingdb');

    db.collection('Todos').insertOne({
        name: 'Sahil Deep Mehra',
        location: 'Himachal Pradesh'
    }, (err, result)=> {
        if(err){
            return console.log('Failed', err);
        }
        console.log(JSON.stringify(result.ops, undefined , 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Sahil Deep Mehra',
    //     age: 23,
    //     location: 'Palampur'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Failed', err);
    //     }
    //     console.log(result.ops[0]._id);
    // });

    client.close();
});