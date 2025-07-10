import express from "express";
import env from "./config/env.config.js";

import accessionRoutes from "./routes/accession.routes.js";
import collectorRoutes from "./routes/collector.routes.js";

const app = express();

app.use("/api/accession", accessionRoutes);
app.use("/api/collector", collectorRoutes);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
