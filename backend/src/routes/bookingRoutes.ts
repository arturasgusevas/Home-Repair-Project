import express from 'express';
import {
  getBookingsByUser,
  addBooking,
  deleteBooking
} from '../controllers/bookingController';

const router = express.Router();

router.get('/user/:email', getBookingsByUser);
router.post('/', addBooking);
router.delete('/:id', deleteBooking);

export default router;
