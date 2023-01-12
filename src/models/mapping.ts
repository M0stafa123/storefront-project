import client from '../database';

//T refers to type
export interface fetching {
  id?: number;
  product_id: number;
  order_id: number;
  quantity: number;
  user_id: number;
}
export class mapping {
  async join(): Promise<fetching[]> {
    try {
      const conn = await client.connect();
      const sql =
        'SELECT products.id as product_id, orders.quantity as quantity, order_id FROM products,orders INNER JOIN mapping ON orders.product_id=mapping.product_id;';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error ${err}`);
    }
  }

  async top5(): Promise<fetching> {
    try {
      const conn = await client.connect();
      const sql =
        'SELECT name FROM products INNER JOIN mapping ON products.id=mapping.product_id ORDER BY quantity DESC LIMIT 5;';
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error  ${err}`);
    }
  }
}
