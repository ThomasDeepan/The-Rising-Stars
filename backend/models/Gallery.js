const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  imageUrl: String,
  caption: String,
  category: String,
  date: { type: Date, default: Date.now }, // Ensure this line exists!
});

// This "Gallery" name here must match the word you use in server.js
module.exports = mongoose.model("Gallery", gallerySchema);
