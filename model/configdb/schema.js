// Import the mongoose library
import mongoose from "mongoose";

// Define a new schema for the mongoose model
const schemas = new mongoose.Schema(
  {
    // Define the 'name' property as a required string
    name: {
      type: String,
      required: true,
      unique:true,
    },

    // Define the 'data' property as an array
    data: {
      type: Array,
    },
  }
);

// Export the mongoose model with the defined schema
export const apiModel = mongoose.model("api", schemas);