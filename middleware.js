const Listing = require('./models/listing');
const Review = require('./models/review');
const { listingSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");
const { reviewSchema } = require("./schema.js");

module.exports.islogin = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl= req.originalUrl;
        req.flash("error" , "please login for performing Operation!");
        res.redirect("/login");
      }
      next();
}

module.exports.saveRedirectUrl  =(req,res,next)=>{
if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
}
next();
};

module.exports.isOwner=async(req,res,next)=>{
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currentuser._id)){
      req.flash("error","You are not owner of this list!");
      return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validation = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
      let errmesg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, errmesg);
    } else {
      next();
    }
  };

  module.exports.reviewValidation = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
      let errmesg = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, errmesg);
    } else {
      next();
    }
  };

  module.exports.isReviewAuthor=async(req,res,next)=>{
    let { reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currentuser._id)){
      req.flash("error","You are not author of this Review!");
      return res.redirect(`/listings/${reviewId}`);
    }
    next();
};