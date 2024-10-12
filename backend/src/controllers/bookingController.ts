const Booking = require('../models/Booking');

const getBookingsByUser = async (req, res) => {
  const bookings = await Booking.find({email: req.params.email});
  res.json(bookings);
};

const addBooking = async (req, res) => {
  const {businessId, date, time, email, name, status} = req.body;
  const booking = new Booking({businessId, date, time, email, name, status});
  await booking.save();
  res.status(201).json(booking);
};

const deleteBooking = async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
  if (!booking) {
    res.status(404).json({message: 'Booking not found'});
  } else {
    res.status(200).json({message: 'Booking deleted'});
  }
};

module.exports = {getBookingsByUser, addBooking, deleteBooking};
