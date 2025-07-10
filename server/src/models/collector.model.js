import db from "../config/db.config.js";

const collectorModel = {
  getAll: async () => {
    const res = await db.query(`SELECT * FROM collector`);
    return res.rows;
  },
};

export default collectorModel;
