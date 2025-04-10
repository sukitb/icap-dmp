import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../../logger";

export const correlationIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const correlationId = req.header("X-Correlation-ID") || uuidv4();
  req.headers["X-Correlation-ID"] = correlationId;
  (req as any).correlationId = correlationId;

  next();
};
