const mongoose = require("mongoose");

// Define user schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
});

// Create User model
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
