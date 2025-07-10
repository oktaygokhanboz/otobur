import db from "../config/db.config.js";

const conditionModel = {
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
};

export default conditionModel;
