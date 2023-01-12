import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { mapping, fetching } from '../../models/mapping';

const MAPROUTE = express.Router();
MAPROUTE.use(bodyParser.json());
const finder = new mapping();

MAPROUTE.get('/', async (req: Request, res: Response): Promise<any> => {
  const maps = await finder.join();

  return res.json(maps);
});

MAPROUTE.get('/top5', async (req: Request, res: Response): Promise<any> => {
  const TOP = await finder.top5();

  return res.json(TOP);
});

export default MAPROUTE;
