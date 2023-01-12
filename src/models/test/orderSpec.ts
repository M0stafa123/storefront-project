import { ORDER } from '../order';
const order = new ORDER();
describe('order model methods', () => {
  it('should contain index method', () => {
    expect(order.index).toBeDefined();
  });
  it('should contain show method', () => {
    expect(order.show).toBeDefined();
  });
  it('should contain create method', () => {
    expect(order.create).toBeDefined();
  });
  it('should contain delete method', () => {
    expect(order.delete).toBeDefined();
  });
  it('should create user', async () => {
    const test: any = await order.create({
      user_id: 1,
      quantity: 5,
      status: true
    });

    expect(test.user_id).toEqual(1);
  });

  it('should search user', async () => {
    const search = await order.show(1);
    expect(search.quantity).toEqual(5);
  });
});
