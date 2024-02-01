import express, { Router, Request, Response } from "express"
const appRouter: Router = express.Router();

appRouter.get("/", (_req: Request, res: Response): Response => {
    return res.json({ message: "Hello" });
});
export default appRouter

