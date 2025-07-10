import seedBankModel from "../models/seed-bank.model.js";

const seedBankController = {
  getAllSeedBank: async (req, res) => {
    try {
      res.json(await seedBankModel.getAll());
    } catch (err) {
      console.log("Error fetching all seed bank data", err);
    }
  },
};

export default seedBankController;
