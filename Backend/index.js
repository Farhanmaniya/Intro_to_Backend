import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import app from "./app.js";

dotenv.config();

const server = async () => {
    const PORT = process.env.PORT;
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(PORT || 8000, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    } catch (error) {
        console.error('Error: ', error);
        process.exit(1);
    }
};

server();