import express from "express";
import { capturebill, viewbill,viewAllBills} from '../controllers/billsControllers.js'
import { authenticate } from '../middlewares/auth.js';

const billsRouter = express.Router();

//Capture reading - Authenticate.
billsRouter.post("/",  capturebill);

//View a bill/:id - Authenticate.
billsRouter.get("/:id", viewbill);

billsRouter.get("/", viewAllBills);





export default billsRouter;
