const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define a schema and model for your data
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const data = mongoose.model("data", dataSchema); // Model name should match the collection name

// Define routes
app.get("/api/data", async (req, res) => {
  try {
    const data = await data.find(); // Use Data model to find data
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
