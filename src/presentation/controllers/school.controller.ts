import { Request, Response } from "express";
import { SchoolCollectingRepositoryImpl } from "../../persistence/repository/school-collecting.repository-impl";
import { SchoolService } from "../../application/services/school.service";
import { SchoolCollectingUsecase } from "../../domain/schoolCollecting/entry-point/school-collecting.usecase";

const schoolService = new SchoolService(
  new SchoolCollectingUsecase(new SchoolCollectingRepositoryImpl())
);

export class SchoolController {
  async createSchool(req: Request, res: Response) {
    try {
      const school = await schoolService.createSchoolInformation(req.body);
      res.sendResponse(school, {
        status: 201,
        message: "School created successfully",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.sendResponse(error, {
        status: 500,
        message: errorMessage,
      });
    }
  }

  async getAllSchools(req: Request, res: Response) {
    try {
      const schools = await schoolService.getAllSchoolInformation();
      res.sendResponse(schools, {
        status: 200,
        message: "School created successfully",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.sendResponse(error, {
        status: 500,
        message: errorMessage,
      });
    }
  }

  async getSchoolById(req: Request, res: Response) {
    try {
      const school = await schoolService.getSchoolInformationById(
        req.params.id
      );
      if (!school) {
        res.sendResponse(null, {
          status: 404,
          message: "School not found",
        });
      } else {
        res.sendResponse(school, {
          status: 200,
          message: "School found",
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.sendResponse(error, {
        status: 500,
        message: errorMessage,
      });
    }
  }

  async updateSchool(req: Request, res: Response) {
    try {
      const school = await schoolService.updateSchoolInformation(
        req.params.id,
        req.body
      );
      if (!school) {
        res.sendResponse(null, {
          status: 404,
          message: "School not found",
        });
      } else {
        res.sendResponse(school, {
          status: 200,
          message: "School updated successfully",
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.sendResponse(error, {
        status: 500,
        message: errorMessage,
      });
    }
  }

  async deleteSchool(req: Request, res: Response) {
    try {
      await schoolService.deleteSchoolInformation(req.params.id);
      res.sendResponse(null, {
        status: 204,
        message: "School deleted successfully",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.sendResponse(error, {
        status: 500,
        message: errorMessage,
      });
    }
  }
}
