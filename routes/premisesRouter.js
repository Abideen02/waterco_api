import express from "express";
import { addPremise, viewAllPremises, updatePremise, viewMemberPremises, viewPremise } from '../controllers/premisesController.js'
// import { authenticate } from '../middlewares/auth.js';

const premisesRouter = express.Router();

// Create premises/
premisesRouter.post("/", addPremise);

// View a premise/:id
premisesRouter.get("/:id", viewPremise);

// View all premises/
premisesRouter.get("/", viewAllPremises);

// View member premises/memberid
premisesRouter.get("/:id", viewMemberPremises);

// Update premise/
premisesRouter.put("/", updatePremise);




export default premisesRouter;