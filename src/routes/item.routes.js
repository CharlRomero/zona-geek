import { Router } from "express";

import { getItems, getItem, updateItem } from "../controllers/item.controller.js";

const router = Router();

router.get("/item", getItems);
router.get("/item/:id", getItem);

router.patch("/item/:id", updateItem);

export default router;
