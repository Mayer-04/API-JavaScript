import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import routerIndex from './routes/index.routes.js';
import productsRoutes from './routes/products.routes.js'
import dataBase from './config/database.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(routerIndex);
app.use(productsRoutes);

// Base de datos
dataBase();

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});