import express from "express";
import { detailsController ,  educationController} from "../controllers/personalController.js";
const personalRoutes = express.Router();
personalRoutes.get('/details' , detailsController);
personalRoutes.get('/education' , educationController);
export default personalRoutes;
