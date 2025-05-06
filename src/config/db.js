import mongoose from "mongoose"
import { config } from "dotenv"

config()
export const databaseConnection = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(console.log("Database Connected!"))
        .catch((error) => console.log(`Error while connecting to database! ${error}`))
}
