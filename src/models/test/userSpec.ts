import { USER } from '../user';

const user = new USER();

describe('user model methods', () => {
  it('should contain index method', () => {
    expect(user.index).toBeDefined();
  });
  it('should contain show method', () => {
    expect(user.show).toBeDefined();
  });
  it('should contain create method', () => {
    expect(user.create).toBeDefined();
  });
  it('should contain delete method', () => {
    expect(user.delete).toBeDefined();
  });

  it('should create user', async () => {
    const test = await user.create({
      username: 'mostafa',
      password: 'password'
    });

    expect(test.id).toEqual(2);
    console.log(test);
  });

  it('should search user', async () => {
    const search = await user.show(1);
    expect(search.username).toEqual('mostafa');
  });
});
