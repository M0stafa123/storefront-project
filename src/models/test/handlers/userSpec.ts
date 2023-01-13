import supertest from 'supertest';
import app from '../../../server';

const request = supertest(app);

describe('Checking user routes', (): void => {
  it('index (should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.get('/users');
    expect(response.statusCode).toEqual(404);
  });

  it('show(should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.get('/users/1');
    expect(response.statusCode).toEqual(404);
  });

  it('create(should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.post('/users');
    expect(response.statusCode).toEqual(404);
  });

  it('authentication', async (): Promise<void> => {
    const response = await request.post('/users/authenticate');
    expect(response.statusCode).toEqual(404);
  });

  it('delete (should get jwt authentication error)', async (): Promise<void> => {
    const response = await request.delete('/users/1');
    expect(response.statusCode).toEqual(404);
  });
});
