import { Router } from "express";
import { getAllClothing, getOneClothing, insertClothing, updateClothing, deleteClothing, homeClothing } from "../controllers/clothing.controller.js";

const router = Router();

router.get('/', getAllClothing);
router.get('/home', homeClothing);
router.get('/:barcode', getOneClothing);
router.post('/', insertClothing);
router.post('/:barcode', updateClothing);
router.get('/delete/:bc', deleteClothing);

export default router;
