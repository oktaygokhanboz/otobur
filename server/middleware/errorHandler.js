import env from "../src/config/env.config.js";

function errorHandler(err, req, res, next) {
  const isDev = env.nodeEnv === "development";

  if (isDev) console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: isDev ? err.message : "Internal Server Error",
  });
}

export default errorHandler;
