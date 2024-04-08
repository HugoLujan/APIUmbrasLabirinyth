import { Router } from "express";
import { getTimes } from "../Controllers/Times.Controller.js";
import { insertTime } from "../Controllers/Times.Controller.js";

const router = Router();

router.get("/getTimes", getTimes);
router.post("/insertTime", insertTime);



export default router;
