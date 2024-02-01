import express, { Application, Request, Response } from "express"
import root from "./routes/root"
import { port, stage } from "./utils/contants"

async function main() {
    const app: Application = express();
    try {
        console.log("Stage: ", stage);

        app.use("/", root)

        app.listen(port, () => {
            console.log("server started on port ", 3000)
        })

    } catch (err) {
        const error = err as Error;
        console.error(error.message);
    }
}

main().catch(err => console.error(err));