import userModel from "../models/user.model.js";

const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      const data = await userModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching all user records");
      next(err);
    }
  },
};

export default userController;
