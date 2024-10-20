import {Router, Request, Response} from 'express';
import User from '../models/Users';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/register', async (req: Request, res: Response): Promise<void> => {
  try {
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if (existingUser) {
      res.status(400).json({message: 'User already exists'});
      return;
    }

    const newUser = new User({name, email, password});
    await newUser.save();

    res.status(201).json({message: 'User registered successfully'});
  } catch (error: unknown) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({message: 'Error registering user', error: error.message});
    } else {
      res.status(500).json({message: 'An unexpected error occurred'});
    }
  }
});

router.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if (!user || !(await user.isCorrectPassword(password))) {
      res.status(401).json({message: 'Incorrect email or password'});
      return;
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET as string, {
      expiresIn: '1h'
    });

    res.status(200).json({token, user});
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({message: 'Error logging in', error: error.message});
    } else {
      res.status(500).json({message: 'An unexpected error occurred'});
    }
  }
});

export default router;
