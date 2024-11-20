import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateSpecializationDto,
  GetSpecializationDto,
  UpdateSpecializationDto,
} from './dto/specialization.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class SpecializationsService {
  constructor(private entityManager: EntityManager) {}
  public async createSpecilization(
    createSpecializationDto: CreateSpecializationDto,
  ): Promise<any> {
    try {
      const { specialization, description, createdBy } =
        createSpecializationDto;
      const query: string = 'call specializationcreate(?,?,?)';
      const params: any[] = [specialization, description, createdBy];
      await this.entityManager.query(query, params);
      return 'Specialization Added Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async updateSpecialization(
    id: number,
    updateSpecializationDto: UpdateSpecializationDto,
  ): Promise<any> {
    try {
      const { specialization, description, modifiedBy } =
        updateSpecializationDto;
      const query: string = 'call specializationupdate(?,?,?,?)';
      const params: any[] = [id, specialization, description, modifiedBy];
      await this.entityManager.query(query, params);
      return 'Specialization Added Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getSpecializations(
    getSpecializationDto: GetSpecializationDto,
  ): Promise<any> {
    try {
      const { start, limit, specialization } = getSpecializationDto;
      const params: any[] = [start, limit, specialization];
      const query: string = 'call specializationgetall(?,?,?)';
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getSpecialization(id: number): Promise<any> {
    try {
      const params: any[] = [id];
      const query: string = 'call specializationgetsingle(?)';
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async deleteSpecialization(
    id: number,
    request: any,
  ): Promise<any> {
    try {

      const params: any[] = [id, request.modifiedBy];
      const query: string = 'call specializationdeletesingle(?,?)';
      await this.entityManager.query(query, params);
      return 'Specialization Deleted Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
