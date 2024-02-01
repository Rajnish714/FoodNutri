import { config } from "dotenv"
config()

export const port: number = Number(process.env.PORT) || 3000
export const stage: string = process.env.STAGE;
