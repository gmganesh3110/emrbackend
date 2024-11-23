export class CreatePatientDto {
    title: string;
    firstName: string;
    lastName: string;
    relationName: string;
    mobileNumber: string;
    gender:string;
    email: string;
    dateOfBirth: Date;
    bloodGroup: string;
    age: string;
    maritalStatus: string;
    address:string;
    city: string;
    state: string;
    country: string;
    createdBy: number;
}
export class UpdatePatientDto {
    id:number;
    title: string;
    firstName: string;
    lastName: string;
    relationName: string;
    mobileNumber: string;
    gender:string;
    email: string;
    dateOfBirth: Date;
    bloodGroup: string;
    age: string;
    maritalStatus: string;
    address:string;
    city: string;
    state: string;
    country: string;
    modifiedBy: number;
}


export class SearchPatientsDto{
    patientName:string;
    mobileNumber: string;
    gender:string;
    email: string;
    bloodGroup: string;
    start:number;
    limit:number;

}