import express from 'express';
import {
  getBusinesses,
  getBusinessById,
  getBusinessesByCategory,
  addBusiness
} from '../controllers/bisinessController';

const router = express.Router();

router.get('/', getBusinesses);
router.get('/category/:category', getBusinessesByCategory);
router.get('/:id', getBusinessById);
router.post('/', addBusiness);

export default router;
