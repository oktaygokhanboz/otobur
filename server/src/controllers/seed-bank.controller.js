import seedBankModel from "../models/seed-bank.model.js";
import dbTable from "../models/shema.js";

// get all seed bank records
const seedBankController = {
  getAllSeedBank: async (req, res, next) => {
    try {
      const data = await seedBankModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching all seed bank records");
      next(err);
    }
  },

  // get a seed bank record by id
  getRecord: async (req, res, next) => {
    try {
      const data = await seedBankModel.getById(req.params.id);
      if (!data) {
        return res
          .status(404)
          .json({ success: false, message: "Record not found" });
      }
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Error fetching seed bank record by ID");
      next(err);
    }
  },

  // add a new seed bank record
  addNewRecord: async (req, res, next) => {
    try {
      await seedBankModel.addNew(req.body);
      res
        .status(201)
        .json({ success: true, message: "Record added successfully" });
    } catch (err) {
      console.error("Error adding new seed bank record");
      next(err);
    }
  },

  // patch a seed bank record by id
  patchRecord: async (req, res, next) => {
    try {
      const data = req.body;
      // check if column name valid
      if (dbTable.seed_bank.includes(data.column)) {
        await seedBankModel.patchById(data);
        res.status(200).json({
          success: true,
          message: "Record updated successfully",
        });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid column name" });
      }
    } catch (err) {
      console.error("Error patching a seed bank record");
      next(err);
    }
  },

  // delete a seed bank record by id
  deleteRecord: async (req, res, next) => {
    try {
      const id = req.params.id;

      // check if record exists
      const record = await seedBankModel.getById(id);
      if (!record) {
        return res
          .status(404)
          .json({ success: false, message: "Record not found" });
      }

      await seedBankModel.deleteById(id);
      res.status(200).json({
        success: true,
        message: "Record deleted successfully",
      });
    } catch (err) {
      console.error("Error deleting seed bank record by ID");
      next(err);
    }
  },
};

export default seedBankController;
