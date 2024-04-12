// Import the express library
import express from "express"

// Import the dotenv library
import dotenv from "dotenv"

// Import the bodyParser library
import bodyParser from "body-parser"

// Import the route module
import route from "./routes.js";

// Import the cors library
import cors from "cors"

// Import the setdb module
import setdb from "./model/configdb/db.js";

// Call the config method of the dotenv library
dotenv.config();

// Create an instance of the express library
const app = express();

// Call the setdb function
setdb();

// Use the cors middleware
app.use(cors());

// Use the bodyParser.json() middleware to support json encoded bodies
app.use(bodyParser.json());

// Use the route module for /api endpoint
app.use("/api",route); 

// Define a middleware function for the root endpoint
app.use("/",(req,res)=>{
    res.send("home pages")
})

// Get the port number from the environment variable or use 3001 as the default
const port = process.env.PORT || 3001;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})