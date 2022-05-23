import {Router} from "express";
import { seedData } from "../controllers/seedController";



const router = Router();

router.get("/", seedData);


export default router;