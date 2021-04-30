import express from "express";
import membersRouter from "./membersRouter.js"
import premisesRouter from './premisesRouter.js'
import paymentsRouter from './paymentsRouter.js'
import routesRouter from './routesRouter.js'
import usersRouter from './usersRouter.js'
import billsRouter from './billsRouter.js'

const router = express.Router();


router.use("/members", membersRouter);
router.use("/premises", premisesRouter);
router.use("/payments", paymentsRouter);
router.use("/routes", routesRouter);
router.use("/users", usersRouter);
router.use("/bills", billsRouter);


export default router;
  