import { Router } from "express";
import { shortUrl, redirectUrl } from "./controller/url-controller.js";

const routes = Router();

routes.post("/shorten-url", shortUrl)
routes.get("/:id", redirectUrl)

export default routes;