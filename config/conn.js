import mongoose from "mongoose";

const connectDb = async (connectionString, dbName) => {
    try {
        const fullConnectionString = `${connectionString}/${dbName}`;
        const connection = await mongoose.connect(fullConnectionString);
        console.log(`Database connected successfully: ${connection.connection.host}`);
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

export default connectDb;
