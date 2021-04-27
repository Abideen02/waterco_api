import express from "express";
import { addPremise, viewAllPremises, updatePremise, viewMemberPremises, viewPremise } from '../controllers/premisesController.js'
import { authenticate } from '../middlewares/auth.js';

const premisesRouter = express.Router();

// Create premises/
premisesRouter.post("/", authenticate ,addPremise);

// View a premise/:id
premisesRouter.get("/:id", authenticate,viewPremise);

// View all premises/
premisesRouter.get("/", authenticate, viewAllPremises);

// View member premises/memberid
premisesRouter.get("/:id", authenticate,viewMemberPremises);

// Update premise/
premisesRouter.put("/", authenticate,updatePremise);




export default premisesRouter;