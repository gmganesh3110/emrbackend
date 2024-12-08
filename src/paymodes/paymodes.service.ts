import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreatePaymodeDto,
  GetPaymodesDto,
  UpdatePaymodeDto,
} from './dto/paymode.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class PaymodesService {
  constructor(private entityManager: EntityManager) {}
  public async createPaymode(createPaymodeDto: CreatePaymodeDto): Promise<any> {
    try {
      const { paymode, description, createdBy } = createPaymodeDto;
      const query = 'call paymodecreateone(?,?,?)';
      const params = [paymode, description, createdBy];
      await this.entityManager.query(query, params);
      return 'Paymode added successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getAllPaymodes(getPaymodesDto: GetPaymodesDto): Promise<any> {
    try {
      const { start, limit, paymode } = getPaymodesDto;
      const query = 'call paymodegetall(?,?,?)';
      const params = [start, limit, paymode];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  public async getSinglePaymode(id: number): Promise<any> {
    try {
      const query = 'call paymodegetsingle(?)';
      const params = [id];
      return await this.entityManager.query(query, params);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async updatePaymode(
    id: number,
    updatePaymodeDto: UpdatePaymodeDto,
  ): Promise<any> {
    try {
      const { paymode, description, modifiedBy } = updatePaymodeDto;
      const query: string = 'call paymodeupdateone(?,?,?,?)';
      const params: any[] = [id, paymode, description, modifiedBy];
      await this.entityManager.query(query, params);
      return 'Paymode Added Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async deletePaymode(id: number, request: any): Promise<any> {
    try {
      const params: any[] = [id, request.modifiedBy];
      const query: string = 'call paymodedeletesingle(?,?)';
      await this.entityManager.query(query, params);
      return 'Paymode Deleted Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
