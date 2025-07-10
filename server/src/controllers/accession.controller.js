import accessionModel from "../models/accession.model.js";

const accessionController = {
  getAllPlants: async (req, res) => {
    try {
      res.json(await accessionModel.getAllPlants());
    } catch (err) {
      console.log("Error fetching all plants:", err);
    }
  },
};

export default accessionController;
