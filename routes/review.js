const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrpaAsync.js");
const {
  reviewValidation,
  islogin,
  isReviewAuthor,
} = require("../middleware.js");
const Reviews = require("../controllers/reviews.js");

// post reviews
router.post("/", islogin, reviewValidation, wrapAsync(Reviews.create));

// Delete reviews
router.delete("/:reviewId", islogin, isReviewAuthor, wrapAsync(Reviews.delete));

module.exports = router;
