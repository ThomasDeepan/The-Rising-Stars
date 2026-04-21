const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Inquiry = require("./models/Inquiry");
const Gallery = require("./models/Gallery");
const Blog = require("./models/Blog");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Tell the server to only trust your React app
  }),
);
app.use(express.json()); // Allows server to read JSON data

const PORT = process.env.PORT || 5000;

// 1. CONNECT TO DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// 2. THE "POST" ROUTE (Receiving data)
app.post("/api/inquiries", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body); // Takes data from the form
    await newInquiry.save(); // Saves it to MongoDB
    res.status(200).json({ message: "Inquiry sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save inquiry" });
  }
});

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.status(200).json({ success: true, message: "Login Successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid Credentials" });
  }
});

// Ensure this is in your backend/server.js
app.get("/api/inquiries", async (req, res) => {
  try {
    const allInquiries = await Inquiry.find().sort({ date: -1 });
    res.status(200).json(allInquiries);
  } catch (error) {
    res.status(500).json({ error: "Server failed to fetch data" });
  }
});

// DELETE an inquiry by ID
app.delete("/api/inquiries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Inquiry.findByIdAndDelete(id);
    res.status(200).json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete inquiry" });
  }
});

// Ensure this is ABOVE app.listen and BELOW your middleware (app.use(cors()))
app.get("/api/gallery", async (req, res) => {
  try {
    const photos = await Gallery.find().sort({ date: -1 });
    // console.log("Found photos:", photos.length); // This will show in your terminal
    res.json(photos);
  } catch (err) {
    console.error("Error fetching gallery:", err);
    res.status(500).send("Server Error");
  }
});

// Run this once by visiting http://localhost:5000/api/gallery/seed
app.get("/api/gallery/seed", async (req, res) => {
  const legacyImages = [];
  // Loop to generate paths for images 1 to 43 based on your screenshots
  for (let i = 1; i <= 52; i++) {
    legacyImages.push({
      imageUrl: `/images/gallery/${i}.jpg`,
      caption: "Rising Stars Memory",
      category: "General",
    });
  }
  await Gallery.insertMany(legacyImages);
  res.send("All 52 legacy images registered in MongoDB!");
});

// ─── BLOG ROUTES ─────────────────────────────────────────────────────────────
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

app.post("/api/blogs", async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to create blog" });
  }
});

app.put("/api/blogs/:id", async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Blog not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update blog" });
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

module.exports = app;
