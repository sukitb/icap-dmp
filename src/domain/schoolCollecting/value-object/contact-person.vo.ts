export class ContactPerson {
  name: string;
  surname: string;
  position: string;
  phoneNumber: string;

  constructor(props: {
    name: string;
    surname: string;
    position: string;
    phoneNumber: string;
  }) {
    this.name = props.name;
    this.surname = props.surname;
    this.position = props.position;
    this.phoneNumber = props.phoneNumber;
  }
}
