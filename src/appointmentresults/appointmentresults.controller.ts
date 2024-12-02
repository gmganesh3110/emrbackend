import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentresultsService } from './appointmentresults.service';
import { CreateAppointmentresultDto } from './dto/create-appointmentresult.dto';
import { UpdateAppointmentresultDto } from './dto/update-appointmentresult.dto';

@Controller('appointmentresults')
export class AppointmentresultsController {
  constructor(private readonly appointmentresultsService: AppointmentresultsService) {}

  @Post()
  create(@Body() createAppointmentresultDto: CreateAppointmentresultDto) {
    return this.appointmentresultsService.create(createAppointmentresultDto);
  }

  @Get()
  findAll() {
    return this.appointmentresultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentresultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentresultDto: UpdateAppointmentresultDto) {
    return this.appointmentresultsService.update(+id, updateAppointmentresultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentresultsService.remove(+id);
  }
}
