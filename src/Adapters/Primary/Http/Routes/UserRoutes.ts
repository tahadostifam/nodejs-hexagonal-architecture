import express from "express";
import UserController from "../Controller/UserController";

function initUserRoutes() {
    const controller = new UserController();
    const router = express.Router();

    router.post("/login", (req, res, next) => controller.login(req, res, next));
    router.post("/register", (req, res, next) => controller.register(req, res, next));

    return router;
}

export default initUserRoutes;
