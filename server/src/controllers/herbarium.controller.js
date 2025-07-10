import herbariumModel from "../models/herbarium.model.js";

const herbariumController = {
  getAllHerbarium: async (req, res, next) => {
    try {
      const data = await herbariumModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.log("Error fetching all herbarium data");
      next(err);
    }
  },
};

export default herbariumController;
