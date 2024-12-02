import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentvitalsService } from './appointmentvitals.service';
import { CreateAppointmentvitalDto } from './dto/create-appointmentvital.dto';
import { UpdateAppointmentvitalDto } from './dto/update-appointmentvital.dto';

@Controller('appointmentvitals')
export class AppointmentvitalsController {
  constructor(private readonly appointmentvitalsService: AppointmentvitalsService) {}

  @Post()
  create(@Body() createAppointmentvitalDto: CreateAppointmentvitalDto) {
    return this.appointmentvitalsService.create(createAppointmentvitalDto);
  }

  @Get()
  findAll() {
    return this.appointmentvitalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentvitalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentvitalDto: UpdateAppointmentvitalDto) {
    return this.appointmentvitalsService.update(+id, updateAppointmentvitalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentvitalsService.remove(+id);
  }
}
