import client from '../database';

export type Dev = {
  id: Number;
  name: string;
  type: string;
  experience: Number;
};

export class FullStackDevStore {
  // index
  index = async (): Promise<Dev[]> => {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM full_stack_dev';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get devs ${err}`);
    }
  };

  // read
  read = async (id: string): Promise<Dev> => {
    try {
      const sql = 'SELECT * FROM full_stack_dev WHERE id=($1)';

      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find book ${id}. Error: ${err}`);
    }
  };

  // create
  create = async (d: Dev): Promise<Dev> => {
    try {
      const sql =
        'INSERT INTO full_stack_dev(name, type, experience) VALUES($1, $2, $3) RETURNING *';
      const conn = await client.connect();
      const result = await conn.query(sql, [d.name, d.type, d.experience]);
      const dev = result.rows[0];
      conn.release();
      return dev;
    } catch (err) {
      throw new Error(`Could not add new dev ${d.name}. Error: ${err}`);
    }
  };

  // delete
  delete = async (id: string): Promise<Dev> => {
    try {
      const sql = 'DELETE FROM full_stack_dev WHERE id=($1)';
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete book ${id}. Error ${err}`);
    }
  };
}
