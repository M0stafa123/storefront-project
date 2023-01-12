import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const verifyToken = req.headers.authorization as string;
    const token = verifyToken.split(' ')[1];
    jwt.verify(token, process.env.TOKEN_SECRET as string);
    next();
  } catch (error) {
    res.status(405);
    res.json(`cannot access ${error}`);
  }
};

export default verifyToken;
