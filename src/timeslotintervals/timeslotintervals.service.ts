import { Injectable } from '@nestjs/common';
import { CreateTimeslotintervalDto } from './dto/create-timeslotinterval.dto';
import { UpdateTimeslotintervalDto } from './dto/update-timeslotinterval.dto';

@Injectable()
export class TimeslotintervalsService {
  create(createTimeslotintervalDto: CreateTimeslotintervalDto) {
    return 'This action adds a new timeslotinterval';
  }

  findAll() {
    return `This action returns all timeslotintervals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timeslotinterval`;
  }

  update(id: number, updateTimeslotintervalDto: UpdateTimeslotintervalDto) {
    return `This action updates a #${id} timeslotinterval`;
  }

  remove(id: number) {
    return `This action removes a #${id} timeslotinterval`;
  }
}
