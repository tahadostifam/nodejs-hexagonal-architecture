import { Request, Response, NextFunction } from "express";
import { container } from "../../../../Utils/DependencyInjectionContainer";
import { Validator } from "node-input-validator";
import { UserApi } from "../../../../Ports/User";

class UserController {
    public service: UserApi = container.get("service.user");

    login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        const v = new Validator(req.body, {
            email: "required|email",
            password: "required",
        });

        v.check().then((matched) => {
            if (!matched) {
                res.status(422).send(v.errors);
                return;
            }

            this.service
                .login(email, password)
                .then((user) => {
                    res.json({
                        msg: "log in successfully",
                        user,
                    });
                })
                .catch((e: Error) => {
                    res.json({ msg: "log in failed", error: e.message });
                });
        });
    }

    register(req: Request, res: Response, next: NextFunction) {
        const { fullName, email, password } = req.body;

        const v = new Validator(req.body, {
            fullName: "required",
            email: "required|email",
            password: "required",
        });

        v.check().then((matched) => {
            if (!matched) {
                res.status(422).send(v.errors);
                return;
            }

            this.service
                .register(fullName, email, password)
                .then((user) => {
                    res.json({
                        msg: "registered successfully",
                        user,
                    });
                })
                .catch((e: Error) => {
                    res.json({ msg: "log in failed", error: e.message });
                });
        });
    }
}

export default UserController;
