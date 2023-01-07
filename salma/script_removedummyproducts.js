const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const database = client.db("test");
const products = database.collection("products");
products.deleteMany({ price : 0} , function(err) {});
