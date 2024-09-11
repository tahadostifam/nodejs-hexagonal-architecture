import express from "express";
import initUserRoutes from "./Routes/UserRoutes";

function initRoutes(app: express.Router) {
    app.use("/users", initUserRoutes());
}

export default initRoutes;
