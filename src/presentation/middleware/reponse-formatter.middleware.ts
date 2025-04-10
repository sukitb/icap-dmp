import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

export const responseFormatterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Retrieve correlation ID from header or generate a new one if not provided
  const correlationId = req.header("X-Correlation-ID") || uuidv4();

  // Optionally, set it back to the request header and as a property for later use
  req.headers["X-Correlation-ID"] = correlationId;
  (req as any).correlationId = correlationId;

  /**
   * sendResponse: Sends a JSON response with a meta block.
   * @param data - The actual data to send in the response.
   * @param meta - Optional meta information. You can pass a custom message and status code.
   */
  res.sendResponse = (
    data: any,
    meta: { message?: string; status?: number } = {}
  ): Response => {
    const status = meta.status || res.statusCode;
    const responseMeta = {
      correlationId,
      message: meta.message || "",
    };

    return res.status(status).json({
      meta: responseMeta,
      data,
    });
  };

  next();
};
