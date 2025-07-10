import db from "../config/db.config.js";

const accessionModel = {
  // Gets id, accession_number, name, material, and origin of all the plants
  getAllPlants: async () => {
    const res = await db.query("SELECT * FROM plant");
    return res.rows;
  },
};

export default accessionModel;
