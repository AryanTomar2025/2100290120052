import express from 'express';
import productRoutes from './Routes/productRoutes.js'; 

const app = express();

app.use(express.json());
app.use('/categories', productRoutes);

export default app;
