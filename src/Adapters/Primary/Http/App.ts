import express from "express";
import initRoutes from "./Routes";
import bodyParser from "body-parser";

class App {
    constructor(port: number) {
        const app = express();

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        const apiRouter = express.Router();
        initRoutes(apiRouter);

        app.use("/api/v1", apiRouter);

        app.listen(port, () => {
            console.log(`Express app is listening at port ${port}`);
        });
    }
}

export default App;
