import { ORDER } from '../../order';
import { PRODUCT } from '../../product';
import { USER } from '../../user';

const user = new USER();

const product = new PRODUCT();

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
it('should create order', async () => {
  const testp = await product.create({
    id: 4,
    name: 'sa',
    price: 4
  });
  const test = await order.create({
    user_id: 1,
    quantity: 5,
    status: true,
    product_id: 1
  });
  expect(test.user_id).toEqual(1);
});

it('should search order', async () => {
  const test = await order.create({
    user_id: 1,
    quantity: 5,
    status: true,
    product_id: 1
  });

  const search = await order.show(test.id as number);
  expect(search.quantity).toBe(5);
});
