import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from "cors"

const app = express();

dotenv.config()

const port = process.env.PORT || 2021;

app.get('/', (req, res) => {
    res.send('Up and running :)')
})

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`Our Water Company API is now available on port ${port}`)  
}) 

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');  // add your front end url in place of *

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'origin', 'Authorization');

    // Set to true if you need the
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    }
    else {
      next();
}});