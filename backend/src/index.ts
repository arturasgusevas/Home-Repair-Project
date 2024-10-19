import 'dotenv/config';
import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import connectDB from './config/db';
import categoryRoutes from './routes/categoryRoutes';
import businessRoutes from './routes/businessRoutes';
import bookingRoutes from './routes/bookingRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import authMiddleware from './middleware/authMiddleware';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/categories', categoryRoutes);
app.use('/businesses', businessRoutes);
app.use('/bookings', bookingRoutes);
app.use('/users', authMiddleware, userRoutes);
app.use('/auth', authRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({message: err.message});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
