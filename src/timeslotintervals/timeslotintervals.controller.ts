import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimeslotintervalsService } from './timeslotintervals.service';
import { CreateTimeslotintervalDto } from './dto/create-timeslotinterval.dto';
import { UpdateTimeslotintervalDto } from './dto/update-timeslotinterval.dto';

@Controller('timeslotintervals')
export class TimeslotintervalsController {
  constructor(private readonly timeslotintervalsService: TimeslotintervalsService) {}

  @Post()
  create(@Body() createTimeslotintervalDto: CreateTimeslotintervalDto) {
    return this.timeslotintervalsService.create(createTimeslotintervalDto);
  }

  @Get()
  findAll() {
    return this.timeslotintervalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timeslotintervalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeslotintervalDto: UpdateTimeslotintervalDto) {
    return this.timeslotintervalsService.update(+id, updateTimeslotintervalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timeslotintervalsService.remove(+id);
  }
}
