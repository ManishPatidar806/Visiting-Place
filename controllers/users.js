const User = require("../models/user.js");
//!Sign up request
module.exports.signupPage = (req, res) => {
    res.render("users/signup.ejs");
  }
//!Sign up logic
 module.exports.signuplogic = async (req, res) => {
    try {
      let { username, password, email } = req.body;
      const newuser = new User({ email, username });
      const registeruser = await User.register(newuser, password);
      console.log(registeruser);
      req.login(registeruser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("success", "Registration successfully!");
        res.redirect("/listings");
      });
    } catch (error) {
      req.flash("error", error.message);
      res.redirect("/signup");
    }
  }
  
//   !Login request
  module.exports.loginRequest =  (req, res) => {
    res.render("users/login.ejs");
  }

//   !Login logic
  module.exports.loginlogic =async (req, res) => {
    req.flash("success", "login Successfully!");
    let redirectUrl  =res.locals.currentuser || "/listings";
    res.redirect(redirectUrl);
  }
// !Logout logic
  module.exports.logoutlogic =(req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "You are logout now!");
      res.redirect("/listings");
    });
  }