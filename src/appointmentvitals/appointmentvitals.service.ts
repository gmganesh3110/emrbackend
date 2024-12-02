import { Injectable } from '@nestjs/common';
import { CreateAppointmentvitalDto } from './dto/create-appointmentvital.dto';
import { UpdateAppointmentvitalDto } from './dto/update-appointmentvital.dto';

@Injectable()
export class AppointmentvitalsService {
  create(createAppointmentvitalDto: CreateAppointmentvitalDto) {
    return 'This action adds a new appointmentvital';
  }

  findAll() {
    return `This action returns all appointmentvitals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmentvital`;
  }

  update(id: number, updateAppointmentvitalDto: UpdateAppointmentvitalDto) {
    return `This action updates a #${id} appointmentvital`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmentvital`;
  }
}
