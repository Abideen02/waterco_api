import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from "cors"

const app = express();

dotenv.config()

const port = process.env.PORT || 2000;

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