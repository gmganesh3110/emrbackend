import { Injectable } from '@nestjs/common';
import { CreateAppointmentresultDto } from './dto/create-appointmentresult.dto';
import { UpdateAppointmentresultDto } from './dto/update-appointmentresult.dto';

@Injectable()
export class AppointmentresultsService {
  create(createAppointmentresultDto: CreateAppointmentresultDto) {
    return 'This action adds a new appointmentresult';
  }

  findAll() {
    return `This action returns all appointmentresults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmentresult`;
  }

  update(id: number, updateAppointmentresultDto: UpdateAppointmentresultDto) {
    return `This action updates a #${id} appointmentresult`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmentresult`;
  }
}
