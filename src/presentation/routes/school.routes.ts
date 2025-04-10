import { Router } from "express";
import { SchoolController } from "../controllers/school.controller";
import { validateBody } from "../middleware/validate.middleware";
import { CreateSchoolRequestDto } from "../../application/dtos/create-school.request.dto";

const router = Router();
const schoolController = new SchoolController();

router.post("/", validateBody(CreateSchoolRequestDto), (req, res) =>
  schoolController.createSchool(req, res)
);
router.get("/", (req, res) => schoolController.getAllSchools(req, res));
router.get("/:id", (req, res) => schoolController.getSchoolById(req, res));
router.put("/:id", validateBody(CreateSchoolRequestDto), (req, res) =>
  schoolController.updateSchool(req, res)
);
router.delete("/:id", (req, res) => schoolController.deleteSchool(req, res));

export default router;
