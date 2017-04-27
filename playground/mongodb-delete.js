// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to Connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }); 

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // 
    db.collection('Users').deleteMany({name: 'James'});

    // db.collection('Users').findOneAndDelete({
    //     _id: new objectID("58ff566aa1fe3c27141a248b")
    // }).then((results) => {
    //     console.log(JSON.stringify(results, undefined, 2));
    // });

    // db.close();
});

