import { ContactPerson } from "../value-object/contact-person.vo";
import { Teacher } from "../value-object/teacher.vo";

export interface SchoolInformationInput {
  schoolName: string;
  houseNumber: string;
  moo?: string;
  road?: string;
  subDistrict?: string;
  district: string;
  province: string;
  postalCode: string;
  director: ContactPerson;
  contactPersons: ContactPerson[];
  teachers: Teacher[];
}
