import conditionModel from "../models/condition.model.js";
import dbTables from "../models/shema.js";

const conditionController = {
  // get all records
  getAllConditions: async (req, res, next) => {
    try {
      const data = await conditionModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching all condition records");
      next(err);
    }
  },

  // get a record
  getRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await conditionModel.getById(id);
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching a condition record");
      next(err);
    }
  },

  // add new record
  addRecord: async (req, res, next) => {
    try {
      const data = req.body;
      await conditionModel.addNew(data);
      res.status(201).json({ success: true });
    } catch (err) {
      console.error("Error adding new condition record");
      next(err);
    }
  },

  // patch an condition record
  patchRecord: async (req, res, next) => {
    try {
      const data = req.body;
      // check if data table and column names exist
      if (dbTables[data.table]?.includes(data.column)) {
        await conditionModel.patchById(data);
        res.status(200).json({ success: true });
      } else {
        throw new Error(
          "Error patching condition record: table name or column name is not correct"
        );
      }
    } catch (err) {
      console.error("Error pathcing condition record");
      next(err);
    }
  },

  // delete a condition record
  deleteRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      await conditionModel.deleteById(id);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error deleting condition record");
      next(err);
    }
  },
};

export default conditionController;
