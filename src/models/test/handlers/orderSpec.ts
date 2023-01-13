import supertest from 'supertest';
import app from '../../../server';

const request = supertest(app);

describe('Checking user routes', (): void => {
  it('index (should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.get('/orders');
    expect(response.statusCode).toEqual(404);
  });

  it('show(should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.get('/orders/1');
    expect(response.statusCode).toEqual(404);
  });

  it('create(should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.post('/orders');
    expect(response.statusCode).toEqual(404);
  });

  it('delete (should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.delete('/orders/1');
    expect(response.statusCode).toEqual(404);
  });
});
