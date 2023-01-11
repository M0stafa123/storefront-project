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
});
