import { SchoolCollectingUsecase } from "../../domain/schoolCollecting/entry-point/school-collecting.usecase";
import { SchoolCollectingRepositoryImpl } from "../../persistence/repository/school-collecting.repository-impl";
import { CreateSchoolRequestDto } from "../dtos/create-school.request.dto";

export class SchoolService {
  private schoolCollectingUsecase: SchoolCollectingUsecase;

  constructor(schoolCollectingUsecase: SchoolCollectingUsecase) {
    this.schoolCollectingUsecase = schoolCollectingUsecase;
  }

  async createSchoolInformation(input: CreateSchoolRequestDto) {
    return await this.schoolCollectingUsecase.createSchoolInformation(input);
  }

  async getAllSchoolInformation() {
    return await this.schoolCollectingUsecase.getAllSchoolInformation();
  }

  async getSchoolInformationById(id: string) {
    return await this.schoolCollectingUsecase.getSchoolInformationById(id);
  }

  async updateSchoolInformation(id: string, input: CreateSchoolRequestDto) {
    return await this.schoolCollectingUsecase.updateSchoolInformation(
      id,
      input
    );
  }

  async deleteSchoolInformation(id: string) {
    return await this.schoolCollectingUsecase.deleteSchoolInformation(id);
  }
}
