import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { PRODUCT, PRODUCTT } from '../../models/product';
import verifyToken from '../../auth';

const PRODUCTROUTE = express.Router();
PRODUCTROUTE.use(bodyParser.json());
const product = new PRODUCT();

PRODUCTROUTE.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const Product = await product.index();

    if (Product) {
      res.json(Product);
    } else {
      res.status(404).send(' not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

//get product by id
PRODUCTROUTE.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id as string);
  if (id) {
    try {
      const Product: PRODUCTT | undefined = await product.show(id);

      if (Product) {
        res.json(Product);
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

//post product, adds a new product
PRODUCTROUTE.post('/', verifyToken, async (req: Request, res: Response): Promise<any> => {
  if (!req.body.name || typeof req.body.name !== 'string') {
    return res.status(400).send('write valid request');
  }
  console.log(req.body);

  const newproduct = await product.create(req.body);

  return res.json(newproduct);
});

//delete a  product
PRODUCTROUTE.delete('/:id', verifyToken, async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id as string);
  if (id) {
    try {
      const deleted: PRODUCTT | undefined = await product.delete(id);
      if (deleted) {
        res.sendStatus(204);
      } else {
        res.status(404).send('not found');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } else {
    res.sendStatus(404);
  }
});

export default PRODUCTROUTE;
