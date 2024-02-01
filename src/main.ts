import express, { Application, application, Request, Response } from "express"
import { port, stage } from "./utils/contants"

async function main() {
    const app: Application = express();
    try {
        console.log("Stage: ", stage);

        app.get("/", (_req: Request, res: Response): Response => {
            return res.json({ message: "Hello" });
        });


        app.listen(port, () => {
            console.log("server started on port ", 3000)
        })
    } catch (err) {
        const error = err as Error;
        console.error(error.message);
    }
}

main().catch(err => console.error(err));