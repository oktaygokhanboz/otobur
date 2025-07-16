import db from "../config/db.config.js";

const accessionModel = {
  // fetch accession table data
  getAll: async () => {
    const res = await db.query(`
      SELECT

      plant.id,
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
      LEFT JOIN collection_info ON plant.id = collection_info.plant_id
      
      ORDER BY accession_number ASC
    `);
    return res.rows;
  },

  // add new record to accession table
  addNew: async (data) => {
    // add a plant record and return its id
    const res = await db.query(
      `
      INSERT INTO plant (
        accession_number,
        name,
        material,
        origin,
        collector_id
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
      `,
      [
        data.accession_number,
        data.plant_name,
        data.material,
        data.origin,
        data?.collector_id,
      ]
    );

    // get plant id from returning value
    const plantId = res.rows[0].id;

    // add collection_info record with plant_id
    await db.query(
      `
      INSERT INTO collection_info (
        collection_number,
        location,
        collection_date,
        latitude,
        longitude,
        plant_id
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [
        data?.collection_number,
        data?.location,
        data?.collection_date,
        data?.latitude,
        data?.longitude,
        plantId,
      ]
    );
  },

  // patch an accession record by id
  patchById: async (id, data) => {
    await db.query(
      `UPDATE ${data.table} SET ${data.column} = $1 WHERE id = $2`,
      [data.value, id]
    );
  },

  // delete an accession record by id
  deleteById: async (id) => {
    await db.query(`DELETE FROM plant WHERE id = $1`, [id]);
  },
};

export default accessionModel;
