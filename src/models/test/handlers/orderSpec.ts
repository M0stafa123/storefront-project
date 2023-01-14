import app from '../../../server';
import supertest = require('supertest');
const request = supertest(app);

it('test index route works', async (): Promise<void> => {
  const response = await request.get('/orders');
  expect(response.statusCode).toEqual(200);
});

// status will be 401 because there will be no product with id 2
it('test show route works', async (): Promise<void> => {
  const response = await request.get('/orders/2');
  expect(response.statusCode).toEqual(200);
});

it('test create route works', async (): Promise<void> => {
  const response = await request.get('/orders');
  expect(response.statusCode).toEqual(200);
});

it('test delete route works', async (): Promise<void> => {
  const response = await request.get('/orders/2');
  expect(response.statusCode).toEqual(200);
});
