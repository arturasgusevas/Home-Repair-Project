import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  currentUser?: any;
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).send({error: 'Not authenticated'});
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    req.currentUser = payload;
    next();
  } catch (err) {
    res.status(401).send({error: 'Not authenticated'});
  }
};

export default authMiddleware;
