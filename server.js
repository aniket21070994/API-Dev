import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import route from "./routes.js";
import cors from "cors"
dotenv.config();
const app = express();


app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies

// Import routes from other files (GET, POST etc.)
app.use("/api",route); 

app.use("/",(req,res)=>{
    res.send("home pages")
})
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
