import { SchoolCollectingRepository } from "../../domain/schoolCollecting/school-collecting.repository";
import { SchoolInformation } from "../../domain/schoolCollecting/entity/school-information.entity";

export class SchoolCollectingRepositoryImpl
  implements SchoolCollectingRepository
{
  async createSchoolInformation(
    entity: SchoolInformation
  ): Promise<SchoolInformation> {
    await entity.save();
    return entity;
  }

  async updateSchoolInformation(
    id: string,
    entity: SchoolInformation
  ): Promise<SchoolInformation | null> {
    try {
      await entity.save();
      return entity;
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message);
      return null;
    }
  }

  async deleteSchoolInformation(id: string): Promise<void> {
    await SchoolInformation.destroy({ where: { id } });
  }

  async getSchoolInformationById(
    id: string
  ): Promise<SchoolInformation | null> {
    return await SchoolInformation.findByPk(id);
  }

  async getAllSchoolInformation(): Promise<SchoolInformation[]> {
    return SchoolInformation.findAll();
  }
}
