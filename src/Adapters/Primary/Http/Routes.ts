import express from "express";
import initUserRoutes from "./Routes/UserRoutes";

function initRoutes(app: express.Express) {
    app.use(initUserRoutes());
}

export default initRoutes;
