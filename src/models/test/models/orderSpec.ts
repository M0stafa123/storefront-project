import { ORDER } from '../../order';
const order = new ORDER();

it('test order create method', async () => {
  const create = await order.create({
    user_id: 1,
    product_id: 1,
    quantity: 1,
    status: true
  });
  expect(create.quantity).toEqual(1);
});

it('test orders index method', async () => {
  const show = await order.show(1);
  expect(show.quantity).toEqual(1);
});
