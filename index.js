const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();

app.use(
    cors({
   origin : "https://memory-client-taupe.vercel.app"
    })
);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));




const port = 8000;

app.use("/user",require("./routes/User"));
app.use('/memory',require("./routes/Memory"));
app.listen(port,()=>{
    console.log(`i am listening on port ${port}`)
})

app.get("/",(req,res) =>{
    res.send("HEllo World");
})

