import seedBankModel from "../models/seed-bank.model.js";

const seedBankController = {
  getAllSeedBank: async (req, res, next) => {
    try {
      const data = await seedBankModel.getAll();
      res.status(200).json({ success: true, data });
    } catch (err) {
      console.log("Error fetching all seed bank data");
      next(err);
    }
  },
};

export default seedBankController;
