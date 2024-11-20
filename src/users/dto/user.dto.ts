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

export class SearchAllDoctorsDto {
  start: number;
  limit: number;
  doctorName: string;
  mobileNumber: string;
  email: string;
  specialization: number;
}

export class UpdateDoctorDto {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  userRole: number = 1;
  dateOfBirth: Date;
  email: string;  
  age: string;
  specialization: number;
  experience: number;
  qualifications: string;
  address: string;
  modifiedBy: number = 1;
}
