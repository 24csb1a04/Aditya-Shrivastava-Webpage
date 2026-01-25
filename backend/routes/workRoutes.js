import express from "express";
import { skillscontroller , achievementscontroller , extracurricularcontroller } from "../controllers/workController.js";
import { codingController } from "../controllers/codingController.js";
const workRoutes = express.Router();
workRoutes.get('/skills' , skillscontroller);
workRoutes.get('/coding' , codingController);
workRoutes.get('/achievements' , achievementscontroller);
workRoutes.get('/extracurricular' , extracurricularcontroller);
export default workRoutes;
