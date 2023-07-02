import { Router } from "express";

import { getTablets, getTablet } from "../controllers/tablet.controller.js";

const router = Router();

router.get("/tablet", getTablets);
router.get("/tablet/:id", getTablet);

export default router;
