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
import { PatientsService } from './patients.service';
import {
  CreatePatientDto,
  SearchPatientsDto,
  UpdatePatientDto,
} from './dto/patient.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @UseGuards(AuthGuard)
  @Post()
  public async createPatient(
    @Body() createPatientDto: CreatePatientDto,
  ): Promise<any> {
    return this.patientsService.createPatient(createPatientDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  public async getAllPatients(
    @Query() searchPatientsDto: SearchPatientsDto,
  ): Promise<any> {
    return this.patientsService.getAllPatients(searchPatientsDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  public async getSpecialization(@Param('id') id: number): Promise<any> {
    return this.patientsService.getSinglePatient(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  public async updatePatient(
    @Param('id') id: number,
    @Body() updatePatientDto: UpdatePatientDto,
  ): Promise<any> {
    return this.patientsService.updatePatient(id, updatePatientDto);
  }
}
