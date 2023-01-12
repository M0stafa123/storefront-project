import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { ORDER, ORDERT } from '../../models/order';
import verifyToken from '../../auth';

const ORDEROUTE = express.Router();
ORDEROUTE.use(bodyParser.json());
const order = new ORDER();

ORDEROUTE.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const Order = await order.index();

    if (Order) {
      res.json(Order);
    } else {
      res.status(404).send('resource not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//get Order by id
ORDEROUTE.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id as string);
  if (id) {
    try {
      const Order: ORDERT | undefined = await order.show(id);

      if (Order) {
        res.json(Order);
      } else {
        res.status(404).send('resource not found');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } else {
    res.sendStatus(404);
  }
});

//post Order, adds a new Order
ORDEROUTE.post('/', verifyToken, async (req: Request, res: Response): Promise<any> => {
  if (!req.body.user_id || typeof req.body.user_id !== 'string') {
    console.log(req.body.user_id);

    return res.status(400).send('write valid request');
  }

  const neworder = await order.create(req.body);

  return res.json(neworder);
});

//delete an Order
ORDEROUTE.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id as string);
  if (id) {
    try {
      const deleted: ORDERT | undefined = await order.delete(id);
      if (deleted) {
        res.sendStatus(204);
      } else {
        res.status(404).send('resource not found');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } else {
    res.sendStatus(404);
  }
});

export default ORDEROUTE;
