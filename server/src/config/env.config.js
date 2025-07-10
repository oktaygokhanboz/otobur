import "dotenv/config";

// Throw error if the environment is null, undefined or empty string
function required(envName) {
  const value = process.env[envName];
  if (!value) {
    throw new Error(`Environment variable ${envName} is required`);
  }
  return value;
}

export default {
  port: parseInt(required("PORT"), 10) || 3000,
  db: {
    host: required("PG_HOST"),
    port: required("PG_PORT"),
    database: required("PG_DATABASE"),
    user: required("PG_USER"),
    password: required("PG_PASSWORD"),
  },
};
