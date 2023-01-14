import bcrypt from 'bcrypt';
import client from '../database';
const pepper = process.env.BCRYPT_PASSWORD;
const SR = process.env.SALT_ROUNDS;
export interface USERT {
  id?: number;
  username: string;
  password: string;
}

export class USER {
  async index(): Promise<USERT[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Error with users ${err}`);
    }
  }

  async show(id: number): Promise<USERT> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${id}. ${err}`);
    }
  }
  async create(u: USERT): Promise<USERT> {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO users(username,password)VALUES($1,$2) RETURNING *`;
      const hash = bcrypt.hashSync(u.password + pepper, parseInt(SR as string));
      const result = await conn.query(sql, [u.username, hash]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${u.username} ${err}`);
    }
  }

  async delete(id: number): Promise<USERT> {
    try {
      const conn = await client.connect();
      const sql = 'DELETE FROM users WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Error with ${id} ${err}`);
    }
  }
  async authenticate(username: string, password: string): Promise<USERT | null> {
    const conn = await client.connect();
    const sql = 'SELECT * FROM users WHERE username=($1)';

    const result = await conn.query(sql, [username]);

    if (result.rows.length) {
      const user = result.rows[0];

      if (bcrypt.compareSync(password + pepper, user.password)) {
        return user;
      }
    }

    return null;
  }
}
