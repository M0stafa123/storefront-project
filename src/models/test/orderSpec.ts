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
});
