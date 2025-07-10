import accessionModel from "../models/accession.model.js";

const accessionController = {
  getAccessionTable: async (req, res, next) => {
    try {
      const data = await accessionModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.log("Error fetching all plants");
      next(err);
    }
  },
};

export default accessionController;
