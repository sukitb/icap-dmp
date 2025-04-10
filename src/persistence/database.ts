import { Sequelize } from "sequelize-typescript";
import { config } from "../config/env";
import { SchoolInformation } from "../domain/schoolCollecting/entity/school-information.entity";
import { logger } from "../logger"; // Your Winston logger

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.pass,
  database: config.database.name,
  logging: (msg: string) => {
    logger.debug(msg);
  },
  models: [SchoolInformation],
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info(`✅ Connected to ${config.env} database!`);
    await sequelize.sync({ alter: true });
  } catch (error) {
    logger.error("❌ Database connection failed:", error);
  }
};
