import { Router } from 'express';
import { getProducts, getProductById } from '../controllers/productController.js';

const router = Router();

router.get('/:categoryname/products', getProducts);
router.get('/:categoryname/products/:productid', getProductById);

export default router;
