// Import the Mongoose library
import mongoose from "mongoose";

// Define the schema for the user
const userSchema = new mongoose.Schema({
  // Define a field for the auth0Id, which is a string and is required
  auth0Id: {
    type: String,
    required: true,
  },
  // Define a field for the email, which is a string and is required
  email: {
    type: String,
    required: true,
  },
  // Define a field for the name, which is an object containing addressLine1, city, and country
  name: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
});

// Create a Mongoose model named "User" using the defined schema
const User = mongoose.model("User", userSchema);

// Export the User model to be used in other parts of the application
export default User;
