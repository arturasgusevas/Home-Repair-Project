import {Request, Response} from 'express';
import Booking from '../models/Booking';

export const getBookingsByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookings = await Booking.find({email: req.params.email});
    res.json(bookings);
  } catch (error) {
    res.status(500).json({message: 'Failed to retrieve bookings'});
  }
};

export const addBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {businessId, date, time, email, name, status} = req.body;
    const booking = new Booking({businessId, date, time, email, name, status});
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({message: 'Failed to add booking'});
  }
};

export const deleteBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      res.status(404).json({message: 'Booking not found'});
    } else {
      res.status(200).json({message: 'Booking deleted'});
    }
  } catch (error) {
    res.status(500).json({message: 'Failed to delete booking'});
  }
};

export const getBookingsByBusinessAndDate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {businessId, date} = req.params;
    const bookings = await Booking.find({businessId, date});
    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve bookings for the specified business and date'
    });
  }
};
