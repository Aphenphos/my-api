const pool = require('../utils/pool');

module.exports = class Thing {
  id;
  name;
  dontget;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dontGet = row.dontget;
  }


  static async getAll() {
    const { rows } = await pool.query('select * from things;');
    return rows.map((row) => new Thing(row));
  }

  static async getByID(id) {
    const { rows } = await pool.query('select * from stuff where id=$1', [id]);
    if (!rows[0]) return null;

    return new Thing(rows[0]);
  }
};
