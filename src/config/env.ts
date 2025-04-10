import dotenv from "dotenv";
import path from "path";

// Load environment variables FIRST before using process.env
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });

export const config = {
  env,
  database: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || "root",
    pass: process.env.DB_PASS || "password",
    name: process.env.DB_NAME || "dmp",
  },
  logLevel: process.env.LOG_LEVEL || "info",
};

console.log("Loaded Config:", config);
