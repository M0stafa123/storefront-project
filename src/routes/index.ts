import express from 'express';
import MAPROUTE from './api/maaping_route';
import ORDEROUTE from './api/order_route';
import PRODUCTROUTE from './api/product_route';
import USEROUTE from './api/user_route';
import verifyToken from '../auth';
const routes = express.Router();
routes.use('/products', PRODUCTROUTE);
routes.use('/users', USEROUTE);
routes.use('/orders', ORDEROUTE);
routes.use('/mapping', MAPROUTE);
routes.get('/', (_req, res): void => {
  res.send('API route');
});
export default routes;
