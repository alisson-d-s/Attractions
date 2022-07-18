import { Request, Response, Router } from "express";
import { CreateAttractionController } from "./controllers/CreateAttractionController";

const routes = Router();

routes.get("/", (request: Request, response: Response) => response.send("Hello world!"));

routes.post("/attraction", new CreateAttractionController().handle);

export { routes };