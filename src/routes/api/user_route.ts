import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { USER, USERT } from '../../models/user';
import jwt from 'jsonwebtoken';
import verifyToken from '../../auth';

const USEROUTE = express.Router();
USEROUTE.use(bodyParser.json());
const user = new USER();
const TS = process.env.TOKEN_SECRET;
//get user by id
USEROUTE.get('/', async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id as string);

  try {
    const User = await user.index();

    if (User) {
      res.json(User);
    } else {
      res.status(404).send(' not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

USEROUTE.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id as string);
  if (id) {
    try {
      const User: USERT | undefined = await user.show(id);

      if (User) {
        res.json(User);
      } else {
        res.status(404).send(' not found');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } else {
    res.sendStatus(404);
  }
});

//post user, adds a new user
USEROUTE.post('/', verifyToken, async (req: Request, res: Response): Promise<any> => {
  if (!req.body.username || typeof req.body.username !== 'string') {
    return res.status(400).send('write valid request');
  }

  const newuser = await user.create(req.body);
  return res.json(newuser);
});

//delete a resouce
USEROUTE.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id as string);
  if (id) {
    try {
      const deleted: USERT | undefined = await user.delete(id);
      if (deleted) {
        res.sendStatus(204);
      } else {
        res.status(404).send(' not found');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } else {
    res.sendStatus(404);
  }
});

export default USEROUTE;
