import {Router} from 'express';
import {
  getBookingsByUser,
  addBooking,
  deleteBooking,
  getBookingsByBusinessAndDate
} from '../controllers/bookingController';

const router = Router();

router.get('/user/:email', getBookingsByUser);
router.post('/', addBooking);
router.delete('/:id', deleteBooking);
router.get('/business/:businessId/date/:date', getBookingsByBusinessAndDate);

export default router;
