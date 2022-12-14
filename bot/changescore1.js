const MongoClient = require('mongodb').MongoClient;
//let MongoClient = mongo.MongoClient;
const ObjectID = require('mongodb').ObjectID;
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const database = client.db("test");
const users = database.collection("users");
const id = process.argv[2];
var objectID = new ObjectID(id)
var cursor = users.find({_id: objectID});

cursor.forEach(function(user) {
        users.updateMany(
            
            {
                _id: user._id,
            },
            {
                    $inc:{
                        score: 100,
                    }   
            },
        );
});