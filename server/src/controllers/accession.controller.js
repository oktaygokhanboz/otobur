import accessionModel from "../models/accession.model.js";
import dbTables from "../models/shema.js";

const accessionController = {
  // fetch all accession records
  getAll: async (req, res, next) => {
    try {
      const data = await accessionModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching all accession records");
      next(err);
    }
  },

  // fetch a record by id from accession table
  getRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await accessionModel.getById(id);
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching an accession record");
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
      console.error("Error adding new accession record");
      next(err);
    }
  },

  // patch an accession record
  patchRecord: async (req, res, next) => {
    try {
      const data = req.body;
      // check if data table and column names exist
      if (dbTables[data.table]?.includes(data.column)) {
        await accessionModel.patchById(data);
        res.status(200).json({ success: true });
      } else {
        throw new Error(
          "Error patching accession record: table name or column name is not correct"
        );
      }
    } catch (err) {
      console.error("Error patching an accession record");
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
      console.error("Error deleting an accession record");
      next(err);
    }
  },
};

export default accessionController;
