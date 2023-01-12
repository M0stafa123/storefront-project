import client from '../database';

//T refers to type
export interface fetching {
  id?: number;
  name: number;
  price: number;
  order_id: number;
}
export class mapping {
  async join(): Promise<fetching[]> {
    try {
      const conn = await client.connect();
      const sql =
        'SELECT name, price, order_id FROM products INNER JOIN order_products ON products.id=order_products.product_id;';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error ${err}`);
    }
  }

  async top5(): Promise<fetching[]> {
    try {
      const conn = await client.connect();
      const sql =
        'SELECT name FROM products INNER JOIN mapping ON products.id=mapping.product_id ORDER BY quantity DESC LIMIT 5;';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error  ${err}`);
    }
  }
}
