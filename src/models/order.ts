import client from '../database';
//T refers to type
export interface ORDERT {
  id?: number;
  product_id?: number;
  user_id?: number;
  quantity: number;
  status: boolean;
}

export class ORDER {
  async index(): Promise<ORDERT[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error ${err}`);
    }
  }

  async show(id: number): Promise<ORDERT> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM orders WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${id}. ${err}`);
    }
  }
  async create(o: ORDERT): Promise<ORDERT> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO orders(product_id,user_id,quantity,status)VALUES($1,$2,$3,$4) RETURNING *`;
      const result = await conn.query(sql, [o.product_id, o.user_id, o.quantity, o.status]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${o.id} ${err}`);
    }
  }
  async delete(id: number): Promise<ORDERT> {
    try {
      const conn = await client.connect();
      const sql = 'DELETE FROM orders WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${id} ${err}`);
    }
  }
}
