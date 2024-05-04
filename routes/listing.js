const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrpaAsync.js");
const { islogin, isOwner, validation } = require("../middleware.js");
const ListingRoute = require("../controllers/listings.js");

router
  .route("/")
  .get(wrapAsync(ListingRoute.index))
  .post(islogin, validation, wrapAsync(ListingRoute.create));

//NEW ROUTES
router.get("/new", islogin, ListingRoute.new);

//SHOW ROUTES
router
  .route("/:id")
  .get(wrapAsync(ListingRoute.show))
  .put(islogin, isOwner, validation, wrapAsync(ListingRoute.update))
  .delete(islogin, isOwner, wrapAsync(ListingRoute.delete));

//Edit route
router.get("/:id/edit", islogin, isOwner, wrapAsync(ListingRoute.edit));

module.exports = router;
