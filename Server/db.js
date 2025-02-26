import mongoose from "mongoose";
mongoose.set('strictQuery', false);

import { MONGODB_URI } from "./config.js";

export async function connectDB () {
    try {
        const db = await mongoose.connect(MONGODB_URI);
        console.log('connected to', db.connection.name);
        return {
            url: MONGODB_URI,
            database: db.connection.name
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
