import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validateBody<T extends object>(dtoClass: new () => T) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const dtoObject = plainToInstance(dtoClass, req.body);

    // Validate the instance
    validate(dtoObject, { whitelist: true, forbidNonWhitelisted: true })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          // Format error messages
          const messages = errors
            .map((error) => Object.values(error.constraints || {}).join(", "))
            .join("; ");
          res.sendResponse(messages, {
            status: 400,
            message: "Validation error",
          });
        } else {
          req.body = dtoObject;
          next();
        }
      })
      .catch((err) => {
        res.sendResponse(err, {
          status: 500,
          message: "Validation error",
        });
      });
  };
}
