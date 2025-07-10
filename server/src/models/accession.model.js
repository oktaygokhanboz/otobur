import db from "../config/db.config.js";

const accessionModel = {
  getAll: async () => {
    const res = await db.query(`
      SELECT

      accession_number,
      plant.name AS plant_name,
      material,
      origin,
      location,
      latitude,
      longitude,
      collection_date,
      collector.name AS collector_name,
      code AS collector_code,
      collection_number

      FROM plant
      LEFT JOIN collector ON collector_id = collector.id
      LEFT JOIN collection_info ON collection_info_id = collection_info.id
      
      ORDER BY accession_number ASC
    `);
    return res.rows;
  },
};

export default accessionModel;
