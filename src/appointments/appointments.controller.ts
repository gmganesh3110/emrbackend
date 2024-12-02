import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateAppointmentDto,
  GetAppointmentsDto,
  GetDoctorTimeDto,
} from './dto/appointment.dto';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @UseGuards(AuthGuard)
  @Get('doctors')
  public async getAppointmentDoctors(): Promise<any> {
    return this.appointmentsService.getAppointmentDoctors();
  }
  

  @UseGuards(AuthGuard)
  @Get()
  public async getAllAppointments(
    @Query() getAppointmentsDto: GetAppointmentsDto,
  ): Promise<any> {
    return this.appointmentsService.getAllAppointments(getAppointmentsDto);
  }
  @UseGuards(AuthGuard)
  @Get('doctortimeslots')
  public async getDoctorTimeslots(
    @Query() getDoctorTimeDto: GetDoctorTimeDto,
  ): Promise<any> {
    return this.appointmentsService.getDoctorTimeslots(getDoctorTimeDto);
  }
  @UseGuards(AuthGuard)
  @Get('patients/:id')
  public async getPatientDetails(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.appointmentsService.getPatientDetails(id);
  }

  @UseGuards(AuthGuard)
  @Post('create')
  public async createAppointment(
    @Body() createAppointmentDto: CreateAppointmentDto,
  ): Promise<any> {
    return this.appointmentsService.createAppointment(createAppointmentDto);
  } 

  @UseGuards(AuthGuard)
  @Get('viewpatient/:id')
  public async getViewPatientDetails(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.appointmentsService.getViewPatientDetails(id);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  public async getSingleAppointment(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.appointmentsService.getSingleAppointment(id);
  }

  @UseGuards(AuthGuard)
  @Get('vitals/:id')
  public async getAppointmentVitals(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.appointmentsService.getAppointmentVitals(id);
  }

  @UseGuards(AuthGuard)
  @Get('results/:id')
  public async getAppointmentResults(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<any> {
    return this.appointmentsService.getAppointmentResults(id);
  }

}
