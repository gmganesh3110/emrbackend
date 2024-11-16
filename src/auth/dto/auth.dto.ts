export class LoginUserDto {
  email: string;
  password: string;
}

export class userDetails {
  id: number;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  password?: string;
  token?:string;
}

export class UpdatePasswordDto {
  email: string;
  password: string;
}


