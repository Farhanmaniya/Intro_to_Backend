import express from 'express';
// import { connectDB } from './src/config/db.js';
// import { router } from './src/router/productRouter.js';
import { userRouter } from './src/router/user.routes.js';

const app = express();

app.use(express.json());

// routes declaration
app.use('/api/v1/users', userRouter);

export default app;