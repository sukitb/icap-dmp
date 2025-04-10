import { SchoolInformation } from "../entity/school-information.entity";
import { SchoolCollectingRepository } from "../school-collecting.repository";
import { SchoolInformationInput } from "../interface/school-information.input";
import { logger } from "../../../logger";

export class SchoolCollectingUsecase {
  constructor(
    private readonly schoolCollectingRepository: SchoolCollectingRepository
  ) {}

  async createSchoolInformation(
    input: SchoolInformationInput
  ): Promise<SchoolInformation> {
    const schoolEntity = new SchoolInformation({ ...input });
    return await this.schoolCollectingRepository.createSchoolInformation(
      schoolEntity
    );
  }

  async getAllSchoolInformation(): Promise<SchoolInformation[]> {
    return await this.schoolCollectingRepository.getAllSchoolInformation();
  }

  async getSchoolInformationById(
    id: string
  ): Promise<SchoolInformation | null> {
    return await this.schoolCollectingRepository.getSchoolInformationById(id);
  }

  async updateSchoolInformation(
    id: string,
    input: SchoolInformationInput
  ): Promise<SchoolInformation | null> {
    const existingSchool =
      await this.schoolCollectingRepository.getSchoolInformationById(id);

    logger.info(`existingSchool: ${JSON.stringify(existingSchool, null, 2)}`);

    if (!existingSchool) {
      return null;
    }

    existingSchool.set({
      ...input,
    });

    logger.info(`updatedSchool: ${JSON.stringify(existingSchool, null, 2)}`);

    return await this.schoolCollectingRepository.updateSchoolInformation(
      id,
      existingSchool
    );
  }

  async deleteSchoolInformation(id: string): Promise<void> {
    return await this.schoolCollectingRepository.deleteSchoolInformation(id);
  }
}
