const express = require('express');
const router = express.Router();
const {
  getBookingsByUser,
  addBooking,
  deleteBooking
} = require('../controllers/bookingController');

router.get('/user/:email', getBookingsByUser);
router.post('/', addBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
