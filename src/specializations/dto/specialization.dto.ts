export class CreateSpecializationDto {
  specialization: string;
  description: string;
  createdBy: number = 1;
}

export class GetSpecializationDto {
  start: number;
  limit: number;
  specialization: number;
}

export class UpdateSpecializationDto {
  specialization: string;
  description: string;
  modifiedBy: number = 1;
}
