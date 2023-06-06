import { Router } from "express";
import { getAllProducts, getProductId, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getProductId);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;