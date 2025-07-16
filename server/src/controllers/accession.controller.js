import accessionModel from "../models/accession.model.js";

// fetch accession table data
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

  // add new record to accession table
  addNewRecord: async (req, res, next) => {
    try {
      const data = req.body;
      await accessionModel.addNew(data);
      res.status(201).json({ success: true, data });
    } catch (err) {
      console.log("Error adding new record to accession table");
      next(err);
    }
  },

  // patch an accession record by id
  patchRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await accessionModel.patchById(id, data);
      res.status(200).json({ success: true });
    } catch (err) {
      console.log("Error pathcing accession record");
      next(err);
    }
  },

  // delete an accession record by id
  deleteRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      await accessionModel.deleteById(id);
      res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  },
};

export default accessionController;
