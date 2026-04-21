const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: "General" },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: "Rising Stars Team" },
  coverImage: { type: String, default: "" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
