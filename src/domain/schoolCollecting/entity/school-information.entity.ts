import { Table, Column, Model, DataType } from "sequelize-typescript";
import { ContactPerson, Teacher } from "../value-object";

@Table({
  tableName: "school_information",
  timestamps: true,
  underscored: true,
})
export class SchoolInformation extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  schoolName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  houseNumber!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  moo!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  road!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  subDistrict!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  district!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  province!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postalCode!: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  director!: ContactPerson;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
    defaultValue: [],
  })
  contactPersons!: ContactPerson[];

  @Column({
    type: DataType.JSONB,
    allowNull: false,
    defaultValue: [],
  })
  teachers!: Teacher[];
}
