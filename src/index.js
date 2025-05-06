import express from "express"
import routes from "./routes.js"
import { databaseConnection } from "./config/db.js"
import { config } from "dotenv"

const app = express();
app.use(express.json())
app.use(routes)

try {
    config();
    app.listen(process.env.PORT, databaseConnection(), console.log("Server is running!"))
} catch (error) {
    console.error(`Error while connecting to server! ${error}`)
}