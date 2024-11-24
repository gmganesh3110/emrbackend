export class CreateTimeslotDto {
  id?:number;
  doctorId: number;
  appointmentsCount:number;
  timeInterval:string;
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  startTime: string;
  endTime: string;
  createdBy: number = 1;
}
