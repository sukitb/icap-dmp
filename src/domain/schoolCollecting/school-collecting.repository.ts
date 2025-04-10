import { SchoolInformation } from "./entity/school-information.entity";

export interface SchoolCollectingRepository {
  createSchoolInformation(
    entity: SchoolInformation
  ): Promise<SchoolInformation>;
  updateSchoolInformation(
    id: string,
    entity: SchoolInformation
  ): Promise<SchoolInformation | null>;
  deleteSchoolInformation(id: string): Promise<void>;
  getSchoolInformationById(id: string): Promise<SchoolInformation | null>;
  getAllSchoolInformation(): Promise<SchoolInformation[]>;
}
