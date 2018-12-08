import jwt from 'jsonwebtoken';
import { jwtSecret } from './config';

export const generateToken = user => {
  return `JWT ${jwt.sign({ _id: user._id }, jwtSecret)}`;
};

export const getUserIdFromToken = token => {
  if (!token)
    return null;
  try {
    const decodedToken = jwt.verify(token.substring(4), jwtSecret);
    return decodedToken._id;
  } catch(err) {
    return null;
  }
};
