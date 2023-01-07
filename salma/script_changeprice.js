const MongoClient = require('mongodb').MongoClient;
//let MongoClient = mongo.MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);


const database = client.db("test");
const products = database.collection("products");
var cursor = products.find({ price: 0  });
var count = cursor.count();
var index = 1;
cursor.forEach(function(product) {
        console.log(index, '/', count, ' : ', product._id);
        index++;

        products.updateMany(
            {
                _id: product._id,
            },
            {
                
                 $set: {
                    price: 50,
                },
            },
        );
}); 
console.log(`${count} documents were updated successfully`)

