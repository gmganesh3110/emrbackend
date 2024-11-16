import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTimeslotDto } from './dto/timeslot.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class TimeslotsService {
  constructor(private entityManager: EntityManager) {}

  public async createTimeSlots(
    createTimeslotDto: CreateTimeslotDto[],
  ): Promise<any> {
    try {
      const timeslotPromises = createTimeslotDto.map(
        async (timeslot: CreateTimeslotDto) => {
          const {id, doctorId, day, startTime, endTime, createdBy } = timeslot;
          const query = `call timeslotcreate(?,?,?,?,?,?)`;
          const params = [id,doctorId, day, startTime, endTime, createdBy || 1];
          return this.entityManager.query(query, params);
        },
      );
      await Promise.all(timeslotPromises);
      return 'Timeslots added successfully';
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllDoctorTimelots(doctorId: number): Promise<any> {
    try {
      const query = 'call timeslotgetalldoctorslots(?)';
      const params = [doctorId];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async deleteTimeslot(id:number):Promise<any>{
    try {
      const query = 'call timeslotdeleteslotfordoctor(?)';
      const params = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
