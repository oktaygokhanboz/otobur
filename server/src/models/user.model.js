import db from "../config/db.config.js";

const userModel = {
  getAll: async () => {
    const res = await db.query(`
      SELECT * FROM otobur_user
      ORDER BY
        CASE user_role
          WHEN 'admin' THEN 1
          WHEN 'normal' THEN 2
          WHEN 'education' THEN 3
        END
    `);
    return res.rows;
  },
};

export default userModel;
