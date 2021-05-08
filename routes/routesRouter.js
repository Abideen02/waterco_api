import express from "express";
import { addroute, viewroute,viewAllroutes, updateroute, deleteroute } from '../controllers/routesController.js'
import { authenticate } from "../middlewares/auth.js";


const routesRouter = express.Router();

//Add a route
routesRouter.post("/",addroute);

//View a route routes/:id
routesRouter.get("/:id",viewroute);

//View all routes routes/ 
routesRouter.get("/", viewAllroutes);

//Update a route routes/
routesRouter.put("/",updateroute);

//Delete a route routes/:id
routesRouter.delete("/:id", deleteroute);
// view premises on route/

export default routesRouter;