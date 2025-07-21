import db from "../config/db.config.js";

// fetch all seed bank records
const seedBankModel = {
  getAll: async () => {
    const res = await db.query(`
      SELECT
        seed_bank.id,
        accession_number,
        name AS plant_name,
        quantity,
        locker_code
      FROM seed_bank
      JOIN plant ON seed_bank.plant_id = plant.id
      ORDER BY accession_number ASC
    `);
    return res.rows;
  },

  // fetch a seed bank record by id
  getById: async (id) => {
    const res = await db.query(
      `
      SELECT
        seed_bank.id,
        accession_number,
        name AS plant_name,
        quantity,
        locker_code
      FROM seed_bank
      JOIN plant ON seed_bank.plant_id = plant.id
      WHERE seed_bank.id = $1
      ORDER BY accession_number ASC
    `,
      [id]
    );
    return res.rows[0];
  },

  // add a new seed bank record
  addNew: async (data) => {
    await db.query(
      `
      INSERT INTO seed_bank (plant_id, quantity, locker_code)
      VALUES ($1, $2, $3)
    `,
      [data.plant_id, data.quantity, data.locker_code]
    );
  },

  // patch a seed bank record by id
  patchById: async (data) => {
    await db.query(`UPDATE seed_bank SET ${data.column} = $1 WHERE id = $2`, [
      data.value,
      data.id,
    ]);
  },

  // delete a seed banck record by id
  deleteById: async (id) => {
    await db.query(`DELETE FROM seed_bank WHERE id = $1`, [id]);
  },
};

export default seedBankModel;
