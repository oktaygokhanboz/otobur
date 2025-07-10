import accessionModel from "../models/accession.model.js";

const accessionController = {
  getAccessionTable: async (req, res) => {
    try {
      res.json(await accessionModel.getAll());
    } catch (err) {
      console.log("Error fetching all plants:", err);
    }
  },
};

export default accessionController;
