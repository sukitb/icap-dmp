import { Request, Response, NextFunction } from "express";
import { logger } from "../../logger";

export const requestLoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const startTime = new Date();
  const { method, originalUrl } = req;

  // Retrieve the correlation id from headers or attached property
  const correlationId =
    req.header("X-Correlation-ID") || (req as any).correlationId || "none";

  // Log the incoming request with metadata
  logger.info(
    `Incoming Request: ${method} ${originalUrl} at ${startTime.toISOString()}`,
    { correlationId }
  );

  res.on("finish", () => {
    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();
    const { statusCode } = res;
    logger.info(
      `Completed: ${method} ${originalUrl} with status ${statusCode} in ${duration}ms`,
      { correlationId }
    );
  });

  next();
};
