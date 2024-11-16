import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { AddDoctorDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private entityManager: EntityManager) {}
  public async doctorGetAllSpecilizations(): Promise<any> {
    try {
      const query: string = 'call doctorgetallspecilizations()';
      return await this.entityManager.query(query);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async addDoctor(addDoctorDto: AddDoctorDto): Promise<any> {
    try {
      const {
        firstName,
        lastName,
        mobileNumber,
        email,
        password,
        dateOfBirth,
        age,
        specialization,
        experience,
        qualifications,
        address,
        createdBy,
      } = addDoctorDto;
      const query: string = 'call doctoraddnew(?,?,?,?,?,?,?,?,?,?,?,?)';
      const params: any[] = [
        firstName,
        lastName,
        mobileNumber,
        email,
        password,
        new Date(dateOfBirth),
        age,
        specialization,
        experience,
        qualifications,
        address,
        createdBy || 1,
      ];
      await this.entityManager.query(query, params);
      return 'Doctor Added Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getAllDoctors(): Promise<any> {
    try {
      const query: string = 'call doctorsgetall()';
      return await this.entityManager.query(query);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
