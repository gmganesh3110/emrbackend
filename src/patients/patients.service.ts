import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreatePatientDto,
  SearchPatientsDto,
  UpdatePatientDto,
} from './dto/patient.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class PatientsService {
  constructor(private entityManager: EntityManager) {}
  public async createPatient(
    createPatientDto: CreatePatientDto,
  ): Promise<string> {
    try {
      const {
        title,
        firstName,
        lastName,
        relationName,
        mobileNumber,
        gender,
        email,
        dateOfBirth,
        bloodGroup,
        age,
        maritalStatus,
        address,
        city,
        state,
        country,
        createdBy,
      } = createPatientDto;
      const query = 'call patientaddone(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      const params: any[] = [
        title,
        firstName,
        lastName,
        relationName,
        mobileNumber,
        gender,
        email,
        dateOfBirth,
        bloodGroup,
        age,
        maritalStatus,
        city,
        state,
        country,
        createdBy,
      ];
      await this.entityManager.query(query, params);
      return 'Patient added successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal server error');
    }
  }
  public async updatePatient(
    id: number,
    updatePatientDto: UpdatePatientDto,
  ): Promise<string> {
    try {
      const {
        title,
        firstName,
        lastName,
        relationName,
        mobileNumber,
        gender,
        email,
        dateOfBirth,
        bloodGroup,
        age,
        maritalStatus,
        address,
        city,
        state,
        country,
        modifiedBy,
      } = updatePatientDto;
      const query = 'call patientupdateone(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      const params: any[] = [
        id,
        title,
        firstName,
        lastName,
        relationName,
        mobileNumber,
        gender,
        email,
        dateOfBirth,
        bloodGroup,
        age,
        maritalStatus,
        address,
        city,
        state,
        country,
        modifiedBy,
      ];
      await this.entityManager.query(query, params);
      return 'Patient added successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  public async getAllPatients(
    searchPatientsDto: SearchPatientsDto,
  ): Promise<any> {
    try {
      const {
        patientName,
        mobileNumber,
        email,
        bloodGroup,
        gender,
        start,
        limit,
      } = searchPatientsDto;
      const query = `call patientsgetall(?,?,?,?,?,?,?)`;
      const params: any[] = [
        patientName,
        mobileNumber,
        email,
        bloodGroup,
        gender,
        start,
        limit,
      ];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal server error');
    }
  }
  public async getSinglePatient(id: number): Promise<any> {
    try {
      const query = `call patientgetsingle(?)`;
      const params: any[] = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
