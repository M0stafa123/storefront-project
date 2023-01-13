import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.send('cannot access 11');
    return 1;
  }
  try {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.TOKEN_SECRET as string);

    next();
  } catch (error) {
    res.status(405);
    res.json(`cannot access ${error}`);
  }
};

export default verifyToken;
