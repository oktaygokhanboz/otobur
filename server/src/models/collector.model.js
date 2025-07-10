import db from "../config/db.config.js";

const collectorModel = {
  getAll: async () => {
    const res = await db.query(`SELECT * FROM collector ORDER BY name ASC`);
    return res.rows;
  },
};

export default collectorModel;
