import express from "express";
import membersRouter from "./membersRouter.js"
import premisesRouter from './premisesRouter.js'
import paymentsRouter from './paymentsRouter.js'
import routesRouter from './routesRouter.js'

const router = express.Router();


router.use("/members", membersRouter);
router.use("/premises", premisesRouter);
router.use("/payments", paymentsRouter);
router.use("/routes", routesRouter);

export default router;
 