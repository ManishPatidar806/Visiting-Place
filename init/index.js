const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
// const MONGO_URL = 'mongodb://127.0.0.1:27017/wonderlust'
const dburl = process.env.ATLASDB_URL;


main().then(()=>{
    console.log("Mongoose is Connected");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb+srv://mp6012217:ManishPatidar@cluster0.2qdlyid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDb = async ()=>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj)=>({...obj,owner:"6638d667596be02fe9eb3777"}));
    await Listing.insertMany(initData.data);
    console.log("Data was Initilise");
}

initDb();