import collectorModel from "../models/collector.model.js";
import dbTables from "../models/shema.js";

const collectorController = {
  // get all collector records
  getAllCollectors: async (req, res, next) => {
    try {
      const data = await collectorModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching all collector records");
      next(err);
    }
  },

  // get a collector record by id
  getRecord: async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await collectorModel.getById(id);
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching a collector record");
      next(err);
    }
  },

  // add record to collector table
  addRecord: async (req, res, next) => {
    try {
      const data = req.body;
      await collectorModel.addNew(data);
      res.status(201).json({ success: true });
    } catch (err) {
      console.error("Error adding new collector record");
      next(err);
    }
  },

  // patch a collector record
  patchRecord: async (req, res, next) => {
    try {
      const data = req.body;
      if (dbTables.collector.includes(data.column)) {
        await collectorModel.patchById(data);
        res.status(200).json({ success: true });
      } else {
        throw new Error("Invalid collector column name");
      }
    } catch (err) {
      console.error("Error patching collector record");
      next(err);
    }
  },

  // delete a collector record
  deleteRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      await collectorModel.deleteById(id);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error deleting a collector record");
      next(err);
    }
  },
};

export default collectorController;
