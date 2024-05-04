if(process.env.NODE_ENV!='production'){
  require('dotenv').config();
}
const express = require("express");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const methodoverride = require("method-override");
const userRouter = require('./routes/user.js');
const listingRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const ExpressError = require("./utils/ExpressError.js");
const app = express();
const path = require("path");
const session  = require('express-session');
const MongoStore = require('connect-mongo');
const port = 8080;
// const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
const dburl = process.env.ATLASDB_URL;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);


const store = MongoStore.create({
  mongoUrl:dburl,
  crypto:{
    seceret:process.env.SECERET,
  },
  touchAfter:24*3600,
});

store.on("error",()=>{
  console.log("ERROR IN MONGO SESSION STORE",err);
});


const sessionOption ={
  store,
  secret:process.env.SECERET,
  resave:false,
  saveUninitialized :true,
  cookies:{
    expires:Date.now() + 7*24*60*60*1000,
    maxAge:7*24*60*60*1000,
    httpOnly:true,
  },
}
app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success = req.flash("Success");
  res.locals.error = req.flash("error");
  res.locals.currentuser  = req.user;
  next();
})

app.use("/",userRouter);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewsRouter);


main()
  .then(() => {
    console.log("Mongoose is Connected");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dburl);
}

app.all("*", (req, res) => {
  next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong!" } = err;
  next(res.status(status).render("error.ejs", { message }));
  
});

app.listen(port, () => {
  console.log("Server is Started");
});