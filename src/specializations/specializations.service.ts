import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSpecializationDto } from './dto/specialization.dto';
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
      return 'User Added Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getSpecializations(): Promise<any> {
    try {
      const query: string = 'call specializationgetall()';
      return await this.entityManager.query(query);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
