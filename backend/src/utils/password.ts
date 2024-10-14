import jwt from 'jsonwebtoken';

const expiresIn = '90d';

interface Payload {
  id: string;
  [key: string]: any;
}

export const generateToken = (payload: Payload): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn
  });
  return token;
};
