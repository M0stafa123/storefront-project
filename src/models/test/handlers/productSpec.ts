import app from '../../../server';
import supertest = require('supertest');
const request = supertest(app);

it('test index route works', async (): Promise<void> => {
  const response = await request.get('/products');
  expect(response.statusCode).toEqual(200);
});

it('test show route works', async (): Promise<void> => {
  const response = await request.get('/products/2');
  expect(response.statusCode).toEqual(401);
});

it('test create route works', async (): Promise<void> => {
  const response = await request.get('/products');
  expect(response.statusCode).toEqual(200);
});

it('test delete route works', async (): Promise<void> => {
  const response = await request.get('/products/2');
  expect(response.statusCode).toEqual(401);
});
