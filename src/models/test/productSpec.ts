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
});
