const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrpaAsync = require("../utils/wrpaAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const UserController = require("../controllers/users.js");

router
  .route("/signup")
  .get(UserController.signupPage)
  .post(wrpaAsync(UserController.signuplogic));

router
  .route("/login")
  .get(UserController.loginRequest)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    UserController.loginlogic
  );

router.get("/logout", UserController.logoutlogic);

module.exports = router;
