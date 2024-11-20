import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import {
  AddDoctorDto,
  SearchAllDoctorsDto,
  UpdateDoctorDto,
} from './dto/user.dto';
import * as bcrypt from 'bcrypt';

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
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);
      const query: string = 'call doctoraddnew(?,?,?,?,?,?,?,?,?,?,?,?)';
      const params: any[] = [
        firstName,
        lastName,
        mobileNumber,
        email,
        encryptedPassword,
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
  public async handleUpdateDoctor(
    id: number,
    updateDoctorDto: UpdateDoctorDto,
  ): Promise<any> {
    try {
      const {
        firstName,
        lastName,
        mobileNumber,
        email,
        dateOfBirth,
        age,
        specialization,
        experience,
        qualifications,
        address,
        modifiedBy,
      } = updateDoctorDto;
      const query: string = 'call doctorupdatesingle(?,?,?,?,?,?,?,?,?,?,?,?)';
      const params: any[] = [
        id,
        firstName,
        lastName,
        mobileNumber,
        email,
        new Date(dateOfBirth),
        age,
        specialization,
        experience,
        qualifications,
        address,
        modifiedBy || 1,
      ];
      await this.entityManager.query(query, params);
      return 'Doctor Updated Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getAllDoctors(
    searchAllDoctorsDto: SearchAllDoctorsDto,
  ): Promise<any> {
    try {
      const { start, limit, doctorName, mobileNumber, email, specialization } =
        searchAllDoctorsDto;
      const query: string = 'call doctorsgetall(?,?,?,?,?,?)';
      const params: any[] = [
        start,
        limit,
        doctorName,
        mobileNumber,
        email,
        specialization,
      ];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getSingleDoctor(id: number): Promise<any> {
    try {
      const query: string = 'call doctorsgetsingle(?)';
      const params: any[] = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async deleteDoctor(id: number, request: any): Promise<any> {
    try {
      const { modifiedBy } = request;
      const query: string = 'call doctorsdeletesingle(?,?)';
      const params: any[] = [id, modifiedBy];
      await this.entityManager.query(query, params);
      return 'Doctor Delete Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
