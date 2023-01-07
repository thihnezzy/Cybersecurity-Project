const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root123@cluster0.lazlxio.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("test");
    const products = database.collection("products");

    // create an array of documents to insert
    const docs = [
      { name: "The grinch that stole christmass", publisher: "Grinch.inc",category:["homme","femme"] , color :["sickly green"], size:["extra large obviously"], price: 0 , description :"One o'clock, Wallow in self pity.Four thirty, Stare into the abyss.Five o'clock, Solve world hunger; Tell no one.Five thirty, Jazz-ercise.Six thirty, dinner with me. I can't cancle that again!Seven o'clock, wrestle with my self-loathing...I'm booked!" ,image:["https://upload.wikimedia.org/wikipedia/en/7/73/The_Grinch.png"],onSale:true,available:2412 }
    ];
    for (var i=0; i<50;i++){
      docs.push( {name: "The grinch that stole christmass", publisher: "Grinch.inc",category:["homme","femme"] , color :["sickly green"], size:["extra large obviously"], price: 0 , description :"One o'clock, Wallow in self pity.Four thirty, Stare into the abyss.Five o'clock, Solve world hunger; Tell no one.Five thirty, Jazz-ercise.Six thirty, dinner with me. I can't cancle that again!Seven o'clock, wrestle with my self-loathing...I'm booked!" ,image:["https://upload.wikimedia.org/wikipedia/en/7/73/The_Grinch.png"],onSale:true,available:2412})
    }
    

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };

    const result = await products.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
