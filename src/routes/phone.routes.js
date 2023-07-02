import { Router } from "express";

import { getPhones, getPhone } from "../controllers/phone.controller.js";

const router = Router();

router.get("/phone", getPhones);
router.get("/phone/:id", getPhone);

export default router;
