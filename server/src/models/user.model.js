import db from "../config/db.config.js";

const userModel = {
  // get all users
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

  // get user by id
  getById: async (id) => {
    const res = await db.query(
      `
      SELECT * FROM otobur_user
      WHERE id = $1
      `,
      [id]
    );
    return res.rows[0];
  },

  // add a new user
  add: async (user) => {
    await db.query(
      `
      INSERT INTO otobur_user (user_name, user_email, user_password, user_role)
      VALUES ($1, $2, $3, $4)
      `,
      [user.user_name, user.user_email, user.user_password, user.user_role]
    );
  },

  // update user by id
  updateById: async (user) => {
    await db.query(
      `
      UPDATE otobur_user
      SET user_name = $1, user_email = $2, user_password = $3, user_role = $4
      WHERE id = $5
      `,
      [
        user.user_name,
        user.user_email,
        user.user_password,
        user.user_role,
        user.id,
      ]
    );
  },

  // delete user by id
  deleteById: async (id) => {
    await db.query(
      `
      DELETE FROM otobur_user
      WHERE id = $1
      `,
      [id]
    );
  },
};

export default userModel;
