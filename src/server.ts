import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import testRoutes from "./presentation/routes/test.routes";
import schoolRoutes from "./presentation/routes/school.routes";
import { connectDB } from "./persistence/database";
import { requestLoggerMiddleware } from "./presentation/middleware/request-logger.middleware";
import { correlationIdMiddleware } from "./presentation/middleware/correlation-id.middleware";
import { responseFormatterMiddleware } from "./presentation/middleware/reponse-formatter.middleware";

dotenv.config(); // Load environment variables

const app = express();

// Place the logging middleware early so that every request is logged
app.use(correlationIdMiddleware);
app.use(requestLoggerMiddleware);
app.use(responseFormatterMiddleware);

app.use(express.json());
app.use(cors());
app.use(helmet());

connectDB();

// Register routes after logging middleware
app.use("/test", testRoutes);
app.use("/schools", schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
