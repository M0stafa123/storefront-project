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
      const sql = 'SELECT user_id,quantity,product_id,name FROM orders  INNER JOIN products ON orders.id = products.id';
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
      const sql = 'SELECT name FROM orders  INNER JOIN products ON orders.id = products.id ORDER BY quantity DESC LIMIT 5;';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error  ${err}`);
    }
  }
}
