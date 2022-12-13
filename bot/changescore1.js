const MongoClient = require('mongodb').MongoClient;
//let MongoClient = mongo.MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const database = client.db("test");
const users = database.collection("users");
var cursor = users.find({email : "ranya@gmail.com" });
var count = cursor.estimatedDocumentCount;
var index = 1;
cursor.forEach(function(user) {
        //console.log(index, '/', count, ' : ', user._id);
        index++;
        console.log(user.score)
        users.updateMany(
            
            {
                _id: user._id,
            },
            {
                $set: {
                    newScore: user.score,
                },
                 $set: {
                    
                    score: user.score - 2939999999274,
                },
            },
        );
});