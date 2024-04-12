// Import the mongoose module
import mongoose from "mongoose";

// Define an asynchronous function called setdb
const setdb = async() => {
   // Use mongoose.connect() to connect to the MongoDB database
   // with the provided connection string
   await mongoose.connect("mongodb+srv://aniket1904:aniket1904@cluster1.fmzcypz.mongodb.net/apidb")
  .then(() => console.log("db connected")) // Log "db connected" if the connection is successful
  .catch(() => console.log('db not connected')); // Log "db not connected" if the connection fails
};

// Export the setdb function as the default export
export default setdb;