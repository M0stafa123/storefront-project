import { PRODUCT } from '../../PRODUCT';
const product = new PRODUCT();
const create = product.create({
  name: 'test',
  price: 1
});

it('should test create method', async () => {
  expect((await create).name).toEqual('test');
});

it('should test index method', async () => {
  const index = await product.index();
  expect(index).toContain(await create);
});

it('should test show method', async () => {
  const show = await product.show(1);
  expect(show.id).toEqual(1);
});
