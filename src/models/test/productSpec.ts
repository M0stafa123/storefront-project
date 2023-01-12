import { PRODUCT } from '../product';

const product = new PRODUCT();

describe('product model methods', () => {
  it('should contain index method', () => {
    expect(product.index).toBeDefined();
  });
  it('should contain show method', () => {
    expect(product.show).toBeDefined();
  });
  it('should contain create method', () => {
    expect(product.create).toBeDefined();
  });
  it('should contain delete method', () => {
    expect(product.delete).toBeDefined();
  });
  it('should create prodcuct', async () => {
    const test = await product.create({
      name: 'product1',
      price: 5
    });

    expect(test.id).toEqual(1);
  });

  it('should search product', async () => {
    const search = await product.show(1);
    expect(search.price).toBe(5);
  });
});
