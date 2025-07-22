import userModel from "../models/user.model.js";

const userController = {
  // get all users
  getAllUsers: async (req, res, next) => {
    try {
      const data = await userModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching all user records");
      next(err);
    }
  },

  // get user by id
  getUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await userModel.getById(id);
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching user record");
      next(err);
    }
  },

  // add a new user
  addUser: async (req, res, next) => {
    try {
      const user = req.body;
      await userModel.add(user);
      res
        .status(201)
        .json({ success: true, message: "User added successfully" });
    } catch (err) {
      console.error("Error adding user record");
      next(err);
    }
  },

  // update user by id
  updateUserById: async (req, res, next) => {
    try {
      const user = req.body;
      await userModel.updateById(user);
      res
        .status(200)
        .json({ success: true, message: "User updated successfully" });
    } catch (err) {
      console.error("Error updating user record");
      next(err);
    }
  },

  // delete user by id
  deleteUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      await userModel.deleteById(id);
      res
        .status(200)
        .json({ success: true, message: "User deleted successfully" });
    } catch (err) {
      console.error("Error deleting user record");
      next(err);
    }
  },
};

export default userController;
