export class CreateTimeslotDto {
  id?:number;
  doctorId: number;
  day: number;
  startTime: string;
  endTime: string;
  createdBy: number = 1;
}
