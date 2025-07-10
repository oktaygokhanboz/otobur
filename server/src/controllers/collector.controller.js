import collectorModel from "../models/collector.model.js";

const collectorController = {
  getAllCollectors: async (req, res, next) => {
    try {
      const data = await collectorModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.log("Error fetching all collectors");
      next(err);
    }
  },
};

export default collectorController;
