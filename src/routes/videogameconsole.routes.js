import { Router } from "express";

import { getVideogameconsoles, getVideogameconsole } from "../controllers/videogameconsole.controller.js"

const router = Router();

router.get("/videogameconsole", getVideogameconsoles);
router.get("/videogameconsole/:id", getVideogameconsole);

export default router;