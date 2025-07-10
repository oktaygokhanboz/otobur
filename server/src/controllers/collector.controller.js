import collectorModel from "../models/collector.model.js";

const collectorController = {
  getAllCollectors: async (req, res) => {
    try {
      res.json(await collectorModel.getAll());
    } catch (err) {
      console.log("Error fetching all collectors:", err);
    }
  },
};

export default collectorController;
