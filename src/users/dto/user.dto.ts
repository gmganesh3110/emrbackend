export class AddDoctorDto {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  password: string;
  userRole: number = 1;
  dateOfBirth: Date;
  age: string;
  specialization: number;
  experience: number;
  qualifications: string;
  address: string;
  createdBy: number = 1;
}
