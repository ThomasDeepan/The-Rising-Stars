const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Inquiry = require("./models/Inquiry");
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
app.post("/api/contact", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
