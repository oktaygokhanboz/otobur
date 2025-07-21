import db from "../config/db.config.js";

const collectorModel = {
  // featch all collector records
  getAll: async () => {
    const res = await db.query(`SELECT * FROM collector ORDER BY name ASC`);
    return res.rows;
  },

  // fetch a collector record by id
  getById: async (id) => {
    const res = await db.query(
      `SELECT * FROM collector WHERE id=$1 ORDER BY name ASC`,
      [id]
    );
    return res.rows[0];
  },

  // add a collector record
  addNew: async (data) => {
    await db.query(
      `
      INSERT INTO collector (name, code, phone, email)
      VALUES ($1, $2, $3, $4)
      `,
      [data.name, data.code, data.phone, data.email]
    );
  },

  // patch a collector record by id
  patchById: async (data) => {
    await db.query(`UPDATE collector SET ${data.column} = $1 WHERE id = $2`, [
      data.value,
      data.id,
    ]);
  },

  // delecte a collector record by id
  deleteById: async (id) => {
    await db.query(`DELETE from collector WHERE id = $1`, [id]);
  },
};

export default collectorModel;
