import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTimeslotDto } from './dto/timeslot.dto';
import { EntityManager } from 'typeorm';
import * as moment from 'moment';

@Injectable()
export class TimeslotsService {
  constructor(private entityManager: EntityManager) {}

  public async createTimeSlots(createTimeslotDto: CreateTimeslotDto[]): Promise<string> {
    try {
      const timeslotPromises = createTimeslotDto.map(async (timeslot: CreateTimeslotDto) => {
        const {
          doctorId,
          appointmentsCount,
          timeInterval,
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          startTime,
          endTime,
          createdBy,
        } = timeslot;
  
        // Call stored procedure to create the timeslot
        const timeslotQuery = `CALL timeslotcreate(?,?,?,?,?,?,?,?,?,?,?,?)`;
        const timeslotParams = [
          doctorId,
          appointmentsCount,
          sunday,
          monday,
          tuesday,
          wednesday,
          thursday,
          friday,
          saturday,
          startTime,
          endTime,
          createdBy,
        ];
  
        const timeslotResult: any = await this.entityManager.query(timeslotQuery, timeslotParams);
        const timeslotId = timeslotResult?.[0]?.[0]?.pid; 
  
        if (!timeslotId) {
          throw new InternalServerErrorException('Failed to create timeslot');
        }
  
        // Generate intervals for the created timeslot
        const intervals = await this.generateTimeSlotIntervals(
          startTime,
          endTime,
          timeInterval,
          doctorId,
          createdBy,
          timeslotId,
        );
  
        // Create timeslot intervals in the database
        const intervalPromises = intervals.map((interval) => {
          const intervalQuery = `CALL timeslotintervalcreate(?,?,?,?,?)`;
          const intervalParams = [
            timeslotId,
            doctorId,
            interval.startTime,
            interval.endTime,
            createdBy
          ];
          return this.entityManager.query(intervalQuery, intervalParams);
        });
  
        await Promise.all(intervalPromises);
      });
  
      await Promise.all(timeslotPromises);
      return 'Timeslots and intervals added successfully';
    } catch (err) {
      console.error('Error while creating timeslots:', err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  

  public async generateTimeSlotIntervals(
    startTime: string,
    endTime: string,
    interval: any,
    doctorId: number,
    createdBy: number,
    timeslotId: number,
  ): Promise<any[]> {
    const start = moment(startTime, 'hh:mm A');
    const end = moment(endTime, 'hh:mm A');
  
    const intervals: Promise<any>[] = [];
    let current = start.clone();
  
    while (current.isBefore(end)) {
      const fromTime = current.format('hh:mm A');
      const toTime = current.add(interval, 'minutes').isBefore(end)
        ? current.format('hh:mm A')
        : end.format('hh:mm A');
  
      intervals.push(
        new Promise((resolve) => {
          resolve({
            startTime: fromTime,
            endTime: toTime,
            doctorId,
            createdBy,
            timeslotId,
            activeStatus: true,
          });
        }),
      );
    }
  
    return await Promise.all(intervals);
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

  public async deleteTimeslot(id: number): Promise<any> {
    try {
      const query = 'call timeslotdeleteslotfordoctor(?)';
      const params = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async timeSlotGetDoctors(): Promise<any> {
    try {
      const query = 'call timeslotgetdoctors()';
      return await this.entityManager.query(query);
    } catch (err) {
      console.error(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
