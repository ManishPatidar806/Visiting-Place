const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
const MONGO_URL = 'mongodb://127.0.0.1:27017/wonderlust'

main().then(()=>{
    console.log("Mongoose is Connected");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDb = async ()=>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj)=>({...obj,owner:"6634d2357b69f4eca8297f4c"}));
    await Listing.insertMany(initData.data);
    console.log("Data was Initilise");
}

initDb();