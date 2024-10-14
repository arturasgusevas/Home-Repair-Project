import express, {Request, Response} from 'express';
import User from '../models/Users';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get(
  '/',
  authMiddleware,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

export default router;
