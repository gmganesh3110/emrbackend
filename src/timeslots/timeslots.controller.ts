import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TimeslotsService } from './timeslots.service';
import { CreateTimeslotDto } from './dto/timeslot.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('timeslots')
export class TimeslotsController {
  constructor(private readonly timeslotsService: TimeslotsService) {}

  @UseGuards(AuthGuard)
  @Post()
  public async createTimeSlots(
    @Body() createTimeslotDto: CreateTimeslotDto[],
  ): Promise<any> {
    return this.timeslotsService.createTimeSlots(createTimeslotDto);
  }

  @UseGuards(AuthGuard)
  @Get('getdoctors')
  public async timeSlotGetDoctors(): Promise<any> {
    return this.timeslotsService.timeSlotGetDoctors();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  public async getAllDoctorTimelots(
    @Param('id') doctorId: number,
  ): Promise<any> {
    return this.timeslotsService.getAllDoctorTimelots(doctorId);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  public async deleteTimeslot(@Param('id') id: number): Promise<any> {
    return this.timeslotsService.deleteTimeslot(id);
  }
}
