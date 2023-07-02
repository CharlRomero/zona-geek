import { Router } from "express";

import { getLaptops, getLaptop } from "../controllers/laptop.controller.js";

const router = Router();

router.get("/laptop", getLaptops);
router.get("/laptop/:id", getLaptop);

export default router;
