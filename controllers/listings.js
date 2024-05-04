const Listing = require("../models/listing.js");
// !Index
module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
};

// !Show
module.exports.show = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};
//!New
module.exports.new = (req, res) => {
  res.render("listings/new.ejs");
};

//!create
module.exports.create = async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("Success", "New Listing Created!");
  res.redirect("/listings");
};
//!Edit

module.exports.edit = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

//!Update
module.exports.update = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("Success", "Updated Successfully!");
  res.redirect("/listings");
};
//!delete
module.exports.delete = async (req, res) => {
  let { id } = req.params;
  let deleteListing = await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  req.flash("Success", "Deleted Successfully!");
  res.redirect("/listings");
};
