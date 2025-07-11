import express from "express";
import env from "./config/env.config.js";
import errorHandler from "../middleware/errorHandler.js";
import cors from "cors";

import accessionRoutes from "./routes/accession.routes.js";
import collectorRoutes from "./routes/collector.routes.js";
import seedBankRoutes from "./routes/seed-bank.routes.js";
import conditionRoutes from "./routes/condition.routes.js";
import herbariumRoutes from "./routes/herbarium.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());

app.use("/api/accession", accessionRoutes);
app.use("/api/collector", collectorRoutes);
app.use("/api/seed-bank", seedBankRoutes);
app.use("/api/condition", conditionRoutes);
app.use("/api/herbarium", herbariumRoutes);
app.use("/api/user", userRoutes);

app.use(errorHandler);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
