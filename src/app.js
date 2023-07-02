import express from "express";
import morgan from "morgan";
import cors from "cors";

import itemRoute from "./routes/item.routes.js";
import laptopRoute from "./routes/laptop.routes.js";
import phoneRoute from "./routes/phone.routes.js";
import tabletRoute from "./routes/tablet.routes.js";
import videogameconsoleRoute from "./routes/videogameconsole.routes.js";

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors);

app.use("/api", itemRoute);
app.use("/api", laptopRoute);
app.use("/api", phoneRoute);
app.use("/api", tabletRoute);
app.use("/api", videogameconsoleRoute);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;
