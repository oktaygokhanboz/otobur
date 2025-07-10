import db from "../config/db.config.js";

const seedBankModel = {
  getAll: async () => {
    const res = await db.query(`
      SELECT

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
};

export default seedBankModel;
