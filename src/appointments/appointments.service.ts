import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { CreateAppointmentDto, GetAppointmentsDto, GetDoctorTimeDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private entityManager: EntityManager) {}
  public async getAppointmentDoctors(): Promise<any> {
    const query = `call appointmentsgetdoctors()`;
    return await this.entityManager.query(query);
    try {
    } catch (err) {}
  }

  public async getAllAppointments(getAppointmentsDto:GetAppointmentsDto): Promise<any> {
    try {
      const {date,doctorId,patientId,patientName,status}=getAppointmentsDto
      const query = `call appointmentsgetallappointments(?,?,?,?,?)`;
      const params=[date,doctorId,patientId,patientName,status];
      return await this.entityManager.query(query,params);
    } catch (err) {
      console.log(err)
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getDoctorTimeslots(
    getDoctorTimeDto: GetDoctorTimeDto,
  ): Promise<any> {
    try {
      const { doctorId, appointmentDate } = getDoctorTimeDto;
      const query = 'call appointmentsdoctorslots(?,?)';
      const params = [doctorId, appointmentDate];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getPatientDetails(id: number): Promise<any> {
    try {
      const query = 'call appointmentspatientdetails(?)';
      const params = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async createAppointment(
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<any> {
    try {
      const {
        appointmentDate,
        patientId,
        doctorId,
        timeSlot,
        visitPurpose,
        createdBy,
      } = createAppointmentDto;
      const query = 'call appointmentscreateone(?,?,?,?,?,?)';
      const params = [
        appointmentDate,
        patientId,
        doctorId,
        timeSlot,
        visitPurpose,
        createdBy,
      ];
      await this.entityManager.query(query, params);
      return "Appointment Added Successfully"
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
