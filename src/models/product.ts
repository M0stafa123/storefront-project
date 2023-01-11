import client from '../database';

export interface PRODUCTT {
  id?: number;
  name: string;
  price: number;
}

export class PRODUCT {
  async index(): Promise<PRODUCTT[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error ${err}`);
    }
  }

  async show(id: number): Promise<PRODUCTT> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${id}. ${err}`);
    }
  }
  async create(p: PRODUCTT): Promise<PRODUCTT> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO products(name,price)VALUES($1,$2) RETURNING *`;
      const result = await conn.query(sql, [p.name, p.price]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${p.name} ${err}`);
    }
  }
  async update(p: PRODUCTT): Promise<PRODUCTT> {
    try {
      const conn = await client.connect();
      const sql = 'UPDATE products SET name=$1 price=$2 WHERE id=$3 RETURNING *';
      const result = await conn.query(sql, [p.id, p.name, p.price]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${p.name} ${err}`);
    }
  }
  async delete(id: number): Promise<PRODUCTT> {
    try {
      const conn = await client.connect();
      const sql = 'DELETE FROM products WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${id} ${err}`);
    }
  }
}
