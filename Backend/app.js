import express from 'express';
// import { connectDB } from './src/config/db.js';
// import { router } from './src/router/productRouter.js';

const app = express();

app.use(express.json());

export default app;