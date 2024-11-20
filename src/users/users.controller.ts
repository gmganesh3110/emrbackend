import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  AddDoctorDto,
  SearchAllDoctorsDto,
  UpdateDoctorDto,
} from './dto/user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get('allspecializations')
  public async doctorGetAllSpecilizations(): Promise<any> {
    return this.usersService.doctorGetAllSpecilizations();
  }

  @UseGuards(AuthGuard)
  @Post('adddoctor')
  public async addDoctor(@Body() addDoctorDto: AddDoctorDto): Promise<any> {
    return this.usersService.addDoctor(addDoctorDto);
  }
  
  @UseGuards(AuthGuard)
  @Get('getalldoctors')
  public async getAllDoctors(
    @Query() searchAllDoctorsDto: SearchAllDoctorsDto,
  ): Promise<any> {
    return this.usersService.getAllDoctors(searchAllDoctorsDto);
  }

  @UseGuards(AuthGuard)
  @Get('doctor/:id')
  public async getSingleDoctor(@Param('id') id: number): Promise<any> {
    return this.usersService.getSingleDoctor(id);
  }

  @UseGuards(AuthGuard)
  @Patch('updatedoctor/:id')
  public async handleUpdateDoctor(
    @Param('id') id: number,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ): Promise<any> {
    return this.usersService.handleUpdateDoctor(id, updateDoctorDto);
  }

  @UseGuards(AuthGuard)
  @Delete('deletedoctor/:id')
  public async deleteDoctor(
    @Param('id') id: number,
    @Body() request: any,
  ): Promise<any> {
    return this.usersService.deleteDoctor(id, request);
  }
}
