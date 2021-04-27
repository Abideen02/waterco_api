import express from "express";
import { addroute, viewroute,viewAllroutes, updateroute, deleteroute } from '../controllers/routesController.js'
import { authenticate } from "../middlewares/auth.js";


const routesRouter = express.Router();

//Add a route
routesRouter.post("/", authenticate ,addroute);

//View a route routes/:id
routesRouter.get("/:id",  authenticate,viewroute);

//View all routes routes/
routesRouter.get("/",  authenticate,viewAllroutes);

//Update a route routes/
routesRouter.put("/",  authenticate,updateroute);

//Delete a route routes/:id
routesRouter.delete("/:id",  authenticate,deleteroute);
// view premises on route/

export default routesRouter;