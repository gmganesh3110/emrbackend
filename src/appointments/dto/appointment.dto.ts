export class CreateAppointmentDto{
    appointmentDate:string;
    doctorId:number
    patientId:number
    timeSlot:string;
    visitPurpose:string;
    createdBy:number;
}

export class GetDoctorTimeDto{
    appointmentDate:string;
    doctorId:number
}

export class GetAppointmentsDto{
    doctorId:number;
    patientId:number;
    patientName:string;
    status:number;
    date:number
}