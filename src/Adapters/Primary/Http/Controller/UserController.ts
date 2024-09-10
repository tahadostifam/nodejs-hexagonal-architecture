import { Request, Response, NextFunction } from "express";

class UserController {
    login(req: Request, res: Response, next: NextFunction) {
        console.log("new req");
    }
}

export default UserController;
