const express = require('express');
const router = express.Router();
const {
  getBusinesses,
  getBusinessById,
  getBusinessesByCategory,
  addBusiness
} = require('../controllers/businessController');

router.get('/', getBusinesses);
router.get('/category/:category', getBusinessesByCategory);
router.get('/:id', getBusinessById);
router.post('/', addBusiness);

module.exports = router;
