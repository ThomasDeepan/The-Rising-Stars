const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  caption: { type: String },
  category: { type: String, default: "General" },
  date: { type: Date, default: Date.now },
});

// This "Gallery" name here must match the word you use in server.js
module.exports = mongoose.model("Gallery", gallerySchema);
