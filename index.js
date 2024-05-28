const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();

// app.use(
//     cors({
//    origin : "http://localhost:3000"
//     })
// );

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));




const port = process.env.PORT;

app.use("/user",require("./routes/User"));
app.use('/memory',require("./routes/Memory"));
app.listen(port,()=>{
    console.log(`i am listening on port ${port}`)
})


