require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const categoryRoutes = require('./routes/categoryRoutes');
const businessRoutes = require('./routes/businessRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/categories', categoryRoutes);
app.use('/businesses', businessRoutes);
app.use('/bookings', bookingRoutes);
app.use('/users', authMiddleware, userRoutes);
app.use('/auth', authRoutes);


app.use((err, req, res, next) => {
  res.status(500).json({message: err.message});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
