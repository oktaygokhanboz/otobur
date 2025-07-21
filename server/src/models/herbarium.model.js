import db from "../config/db.config.js";

const herbariumModel = {
  // get all herbarium records
  getAll: async () => {
    const res = await db.query(`
      SELECT
        herbarium.id,
        herbarium_no,
        plant.name AS plant_name,
        collector.name AS collector_name,
        collector.code AS collector_code,
        collection_number,
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

  // get a herbarium record
  getById: async (id) => {
    const res = await db.query(
      `
      SELECT
        herbarium.id,
        herbarium_no,
        plant.name AS plant_name,
        collector.name AS collector_name,
        collector.code AS collector_code,
        collection_number,
        location,
        latitude,
        longitude,
        accession_number,
        is_photo
      FROM herbarium
      JOIN plant ON herbarium.plant_id = plant.id
      LEFT JOIN collector ON herbarium.collector_id = collector.id
      LEFT JOIN collection_info ON herbarium.collection_info_id = collection_info.id
      WHERE herbarium.id = $1
      ORDER BY herbarium_no ASC
      `,
      [id]
    );
    return res.rows[0];
  },

  // add new herbarium record
  addNew: async (data) => {
    await db.query(
      `
      INSERT INTO herbarium (
        herbarium_no,
        plant_id,
        collector_id,
        collection_info_id,
        is_photo
      )
      VALUES ($1, $2, $3, $4, $5)
      `,
      [
        data.herbarium_no,
        data.plant_id,
        data.collector_id,
        data.collection_info_id,
        data.is_photo,
      ]
    );
  },

  // patch a herbarium record
  patchRecord: async (data) => {
    await db.query(`UPDATE herbarium SET ${data.column} = $1 WHERE id = $2`, [
      data.value,
      data.id,
    ]);
  },

  // delete a herbarium record
  deleteById: async (id) => {
    await db.query(`DELETE FROM herbarium WHERE id = $1`, [id]);
  },
};

export default herbariumModel;
