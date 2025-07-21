import herbariumModel from "../models/herbarium.model.js";
import dbTable from "../models/shema.js";

const herbariumController = {
  // get all herbarium records
  getAllHerbarium: async (req, res, next) => {
    try {
      const data = await herbariumModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error;
      next(err);
    }
  },

  // get a herbarium record
  getRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await herbariumModel.getById(id);
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching a herbarium record");
      next(err);
    }
  },

  // add new herbarium record
  addNewRecord: async (req, res, next) => {
    try {
      const data = req.body;
      await herbariumModel.addNew(data);
      res.status(201).json({ success: true });
    } catch (err) {
      console.error("Error adding new herbarium record");
      next(err);
    }
  },

  // patch a herbarium record
  patchRecord: async (req, res, next) => {
    try {
      const data = req.body;
      // check if column name exist
      if (dbTable.herbarium.includes(data.column)) {
        await herbariumModel.patchRecord(data);
        res.status(200).json({ success: true });
      } else {
        throw new Error("Invalid herbarium column name");
      }
    } catch (err) {
      console.error("Error patching herbarium record");
      next(err);
    }
  },

  // delete a herbarium record
  deleteRecord: async (req, res, next) => {
    try {
      const { id } = req.params;
      await herbariumModel.deleteById(id);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error deleting herbarium record");
      next(err);
    }
  },
};

export default herbariumController;
