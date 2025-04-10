import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsNotEmpty,
} from "class-validator";
import { Type } from "class-transformer";

// Example DTO for ContactPerson
export class ContactPersonDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  surname!: string;

  @IsString()
  @IsNotEmpty()
  position!: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber!: string;
}

// Example DTO for Teacher
export class TeacherDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  surname!: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber!: string;

  @IsString()
  @IsNotEmpty()
  educationLevel!: string;

  @IsString()
  @IsNotEmpty()
  major!: string;

  @IsString()
  @IsNotEmpty()
  type!: string;
}

// Main DTO for creating a school
export class CreateSchoolRequestDto {
  @IsString()
  @IsNotEmpty()
  schoolName!: string;

  @IsString()
  @IsNotEmpty()
  houseNumber!: string;

  @IsString()
  @IsOptional()
  moo?: string;

  @IsString()
  @IsOptional()
  road?: string;

  @IsString()
  @IsOptional()
  subDistrict?: string;

  @IsString()
  @IsNotEmpty()
  district!: string;

  @IsString()
  @IsNotEmpty()
  province!: string;

  @IsString()
  @IsNotEmpty()
  postalCode!: string;

  @ValidateNested()
  @Type(() => ContactPersonDto)
  director!: ContactPersonDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPersonDto)
  contactPersons!: ContactPersonDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TeacherDto)
  teachers!: TeacherDto[];
}
