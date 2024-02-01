import { config } from "dotenv"
config()

async function main() {
    try {
        const stage: string = process.env.STAGE;
        console.log("Stage: ", stage);
    } catch (err) {
        const error = err as Error;
        console.error(error.message);
    }
}

main().catch(err => console.error(err));