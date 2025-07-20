import db from "../config/db.config.js";

const conditionModel = {
  // fetch all condition records
  getAll: async () => {
    const res = await db.query(`
    SELECT
    
    plant_condition.id,
    accession_number,
    plant.name AS plant_name,
    observation_date,
    otobur_user.name AS observer_name,
    garden_location,
    location_code,
    status,
    vegetation_status,
    observation

    FROM plant_condition
    JOIN plant ON plant_condition.plant_id = plant.id
    LEFT JOIN otobur_user ON plant_condition.user_id = otobur_user.id

    ORDER BY accession_number ASC
    `);

    return res.rows;
  },

  // fetch a condition record by id
  getById: async (id) => {
    const res = await db.query(
      `
    SELECT
    
    plant_condition.id,
    accession_number,
    plant.name AS plant_name,
    observation_date,
    otobur_user.name AS observer_name,
    garden_location,
    location_code,
    status,
    vegetation_status,
    observation

    FROM plant_condition
    JOIN plant ON plant_condition.plant_id = plant.id
    LEFT JOIN otobur_user ON plant_condition.user_id = otobur_user.id
    WHERE plant_condition.id = $1

    ORDER BY accession_number ASC
    `,
      [id]
    );

    return res.rows;
  },

  // add new record
  addNew: async (data) => {
    await db.query(
      `
      INSERT INTO plant_condition (
      plant_id, 
      user_id, 
      observation_date, 
      garden_location, 
      location_code, 
      status, 
      vegetation_status, 
      observation
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `,
      [
        data.plant_id,
        data.user_id,
        data.observation_date,
        data.garden_location,
        data.location_code,
        data.status,
        data.vegetation_status,
        data.observation,
      ]
    );
  },

  // patch record
  patchById: async (data) => {
    await db.query(
      `UPDATE ${data.table} SET ${data.column} = $1 WHERE id = $2`,
      [data.value, data.id]
    );
  },

  //delete record
  deleteById: async (id) => {
    await db.query(`DELETE FROM plant_condition WHERE id = $1`, [id]);
  },
};

export default conditionModel;
