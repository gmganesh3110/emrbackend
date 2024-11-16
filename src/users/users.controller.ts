import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AddDoctorDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('allspecializations')
  public async doctorGetAllSpecilizations(): Promise<any> {
    return this.usersService.doctorGetAllSpecilizations();
  }

  @Post('adddoctor')
  public async addDoctor(@Body() addDoctorDto: AddDoctorDto): Promise<any> {
    return this.usersService.addDoctor(addDoctorDto);
  }
  @Get('getalldoctors')
  public async getAllDoctors(): Promise<any> {
    return this.usersService.getAllDoctors();
  }
}
