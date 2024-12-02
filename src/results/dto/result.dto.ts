export class CreateResultsDto {
    name: string;
    shortCode: string;
    displayName: string;
    measurement: string;
    description: string;
    createdBy: number;
  }
  export class UpdateResultsDto {
    name: string;
    shortCode: string;
    displayName: string;
    measurement: string;
    description: string;
    modifiedBy: number;
  }
  
  
  export class SearchResultsDto{
    start:number;
    limit:number;
    name:string;
    code:string;
  }