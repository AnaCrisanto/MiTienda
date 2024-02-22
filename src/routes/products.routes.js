import { Router } from "express";
import { getAll, getOne, insertProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js";
const router= Router();

router.get('/', getAll);
router.get('/:barcode', getOne)
router.post('/', insertProduct)
router.post('/:barcode', updateProduct)
router.get('/delete/:bc', deleteProduct);
export default router; 