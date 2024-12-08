export class CreatePaymodeDto {
  paymode: string;
  description: string;
  createdBy: number;
}

export class GetPaymodesDto {
  start: number;
  limit: number;
  paymode: string;
}

export class UpdatePaymodeDto {
  paymode: string;
  description: string;
  modifiedBy: number;
}
