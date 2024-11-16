import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { CreateTimeslotDto } from './dto/timeslot.dto';

@Controller('timeslots')
export class TimeslotsController {
  constructor(private readonly timeslotsService: TimeslotsService) {}

  @Post()
  createTimeSlots(@Body() createTimeslotDto: CreateTimeslotDto[]) {
    return this.timeslotsService.createTimeSlots(createTimeslotDto);
  }

  @Get(':id')
  async getAllDoctorTimelots(@Param('id') doctorId: number): Promise<any> {
    return this.timeslotsService.getAllDoctorTimelots(doctorId);
  }
  @Delete(':id')
  async deleteTimeslot(@Param('id') id: number): Promise<any> {
    return this.timeslotsService.deleteTimeslot(id);
  }
}
