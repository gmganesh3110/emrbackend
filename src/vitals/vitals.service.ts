import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateVitalDto,
  SearchVitalsDto,
  UpdateVitalDto,
} from './dto/vital.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class VitalsService {
  constructor(private entityManager: EntityManager) {}
  public async addVitals(createVitalDto: CreateVitalDto): Promise<any> {
    try {
      const {
        name,
        shortCode,
        displayName,
        measurement,
        description,
        createdBy,
      } = createVitalDto;
      const query = 'call vitalscreate(?,?,?,?,?,?)';
      const params = [
        name,
        shortCode,
        displayName,
        measurement,
        description,
        createdBy,
      ];
      await this.entityManager.query(query, params);
      return 'Vitals added successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllVitals(searchVitalsDto: SearchVitalsDto): Promise<any> {
    try {
      const { name, code, start, limit } = searchVitalsDto;
      const query = 'call vitalsgetall(?,?,?,?)';
      const params = [name, code, start, limit];
      return await this.entityManager.query(query, params);
    } catch (err) {}
  }

  public async getVitalSigle(id: number): Promise<any> {
    try {
      const query = 'call vitalsgetone(?)';
      const params = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {}
  }

  public async deleteSingleVital(id: number, request: any): Promise<any> {
    try {
      const query = 'call vitalsdeleteone(?,?)';
      const params = [id, request?.modifiedBy];
      return await this.entityManager.query(query, params);
    } catch (err) {}
  }

  public async updateSingleVital(
    id: number,
    updateVitalDto: UpdateVitalDto,
  ): Promise<any> {
    try {
      const {
        name,
        shortCode,
        displayName,
        measurement,
        description,
        modifiedBy,
      } = updateVitalDto;
      const query = 'call vitalsupdateone(?,?,?,?,?,?,?)';
      const params = [
        id,
        name,
        shortCode,
        displayName,
        measurement,
        description,
        modifiedBy,
      ];
      await this.entityManager.query(query, params);
      return 'Vitals Updated successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
