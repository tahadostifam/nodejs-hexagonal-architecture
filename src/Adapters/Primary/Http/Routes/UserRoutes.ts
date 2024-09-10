import express from "express";
import UserController from "../Controller/UserController";

function initUserRoutes() {
    const controller = new UserController();
    const router = express.Router();

    router.post("/login", controller.login);

    return router;
}

export default initUserRoutes;
