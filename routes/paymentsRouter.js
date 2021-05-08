import express from "express";
import { capayment, viewAllPayment, paymentPremise} from '../controllers/paymentsControllers.js'
import { authenticate } from '../middlewares/auth.js';

const paymentsRouter = express.Router();

//Capture Payment
paymentsRouter.post("/",capayment);

//View all Payment
paymentsRouter.get("/",viewAllPayment);

// //view payment by premise
paymentsRouter.get("/",paymentPremise);

export default paymentsRouter;






