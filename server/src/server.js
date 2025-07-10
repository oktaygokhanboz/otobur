import express from "express";
import env from "./config/env.config.js";

import accessionRoutes from "./routes/accession.routes.js";

const app = express();

app.use("/api/accession", accessionRoutes);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
