import { Router } from "express";
import { getAllClothing, getOneClothing, insertClothing, updateClothing, deleteClothing, homeClothing, info } from "../controllers/clothing.controller.js";

const router = Router();

router.get('/', getAllClothing);
router.get('/home', homeClothing);
router.get('/info', info);
router.get('/:barcode', getOneClothing);
router.post('/', insertClothing);
router.post('/:barcode', updateClothing);
router.get('/delete/:bc', deleteClothing);

export default router;
