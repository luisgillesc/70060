// backend/app.js
import express from 'express';
import mocksRouter from './routes/mocks.router.js';

const app = express();
app.use(express.json());

// Ruta base para mocks
app.use('/api/mocks', mocksRouter);

// Exporta la aplicación como exportación predeterminada
export default app;
