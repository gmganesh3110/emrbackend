export class CreateVitalDto {
  name: string;
  shortCode: string;
  displayName: string;
  measurement: string;
  description: string;
  createdBy: number;
}
export class UpdateVitalDto {
  name: string;
  shortCode: string;
  displayName: string;
  measurement: string;
  description: string;
  modifiedBy: number;
}


export class SearchVitalsDto{
  start:number;
  limit:number;
  name:string;
  code:string;
}