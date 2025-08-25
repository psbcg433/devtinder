import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./config/conn.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

async function startServer() {
    try {
        await connectDb(MONGO_URI, DB_NAME);
        await app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
}

startServer();