const { Console } = require('console');
const { url } = require('inspector');
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
//let MongoClient = mongo.MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const database = client.db("test_script");
const products = database.collection("script_products");
const cursor = products.find({}, {_id: 1});



function write(){
    fs.writeFile('test.txt', '', (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
    })
    
    cursor.forEach(function (product) {
      
            fs.appendFile('test.txt', "http://localhost:3000/products/"+product._id +"\n", function (err) {
                if (err) throw err;
                console.log('Saved!');
              });
        //temp.push(product._id)
        //console.log(temp);
    });  
}
 
write()