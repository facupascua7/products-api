import { Router } from "express";
import * as productsCtrl from '../controllers/products.controller';
const router = Router();

router.get('/', productsCtrl.getProducts);
router.get('/:productId', productsCtrl.getProductById);

router.post('/', productsCtrl.createProduct);

router.put('/:productId', productsCtrl.updateProductById);

router.delete('/:productId', productsCtrl.deleteProductById);

export default router;