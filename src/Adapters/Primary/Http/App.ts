import express from "express";
import initRoutes from "./Routes";

class App {
    constructor(port: number) {
        const app = express();

        initRoutes(app);

        app.listen(port, () => {
            console.log(`Express app is listening at port ${port}`);
        });
    }
}
