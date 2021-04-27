import express from "express";
import { capayment, viewAllPayment, paymentPremise} from '../controllers/paymentsControllers.js'
import { authenticate } from '../middlewares/auth.js';

const paymentsRouter = express.Router();

//Capture Payment
paymentsRouter.post("/", authenticate,capayment);

//View all Payment
paymentsRouter.get("/", authenticate,viewAllPayment);

// //view payment by premise
paymentsRouter.get("/", authenticate ,paymentPremise);

export default paymentsRouter;






