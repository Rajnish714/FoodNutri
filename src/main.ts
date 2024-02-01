import { sum } from "./utils/sum"
import { config } from "dotenv"
config()

async function main() {
    try {
        const stage = process.env.STAGE
        console.log(sum(1, 2))
    } catch (err) {
        console.error(err)
    }
}

main().catch(err => console.error(err))