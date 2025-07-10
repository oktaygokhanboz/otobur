import conditionModel from "../models/condition.model.js";

const conditionController = {
  getAllConditions: async (req, res, next) => {
    try {
      const data = await conditionModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.log("Error fetching all plant condition data");
      next(err);
    }
  },
};

export default conditionController;
