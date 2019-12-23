import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
<<<<<<< HEAD
  const authHeader = req.headers.autorization || req.headers.authorization;
=======
  const authHeader = req.headers.autorization;
>>>>>>> 2d735f08c3004186711824e98595f39946644169

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // console.log(decoded);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
