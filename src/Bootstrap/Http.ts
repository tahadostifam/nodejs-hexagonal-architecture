import { bootstrapServices } from "./Bootstrap";
import App from "../Adapters/Primary/Http/App";

const port = 3000;

bootstrapServices();

new App(port);
