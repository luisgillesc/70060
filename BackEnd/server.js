// backend/server.js
import app from './app.js';
import { connectDB } from './config.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
