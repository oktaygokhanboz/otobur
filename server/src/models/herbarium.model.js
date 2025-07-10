import db from "../config/db.config.js";

const herbariumModel = {
  getAll: async () => {
    const res = await db.query(`
      SELECT
      
      herbarium_no,
      plant.name AS plant_name,
      collector.name AS collector_name,
      collector.code AS collector_code,
      collection_number
      location,
      latitude,
      longitude,
      accession_number,
      is_photo
      
      FROM herbarium
      JOIN plant ON herbarium.plant_id = plant.id
      LEFT JOIN collector ON herbarium.collector_id = collector.id
      LEFT JOIN collection_info ON herbarium.collection_info_id = collection_info.id

      ORDER BY herbarium_no ASC
    `);

    return res.rows;
  },
};

export default herbariumModel;
