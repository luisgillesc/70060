// backend/config.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://luisgillesc:<159753coder>@coderback.wvpmo5m.mongodb.net/?retryWrites=true&w=majority&appName=CoderBack"); // Sin opciones obsoletas
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
