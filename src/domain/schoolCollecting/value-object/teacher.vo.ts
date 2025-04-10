export class Teacher {
  name: string;
  surname: string;
  type: string;
  phoneNumber: string;
  educationLevel: string;
  major: string;

  constructor(props: {
    name: string;
    surname: string;
    type: string;
    phoneNumber: string;
    educationLevel: string;
    major: string;
  }) {
    this.name = props.name;
    this.surname = props.surname;
    this.type = props.type;
    this.phoneNumber = props.phoneNumber;
    this.educationLevel = props.educationLevel;
    this.major = props.major;
  }
}
