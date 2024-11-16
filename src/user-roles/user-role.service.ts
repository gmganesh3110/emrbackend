import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserTypeDto } from './dto/user-role.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserTypesService {
  constructor(private entityManager: EntityManager) {}
  public async createUserRole(
    createUserTypeDto: CreateUserTypeDto,
  ): Promise<any> {
    try {
      const { userRole, description, createdBy } = createUserTypeDto;
      const query: string = 'call userrolecreate(?,?,?)';
      const params: any[] = [userRole, description, createdBy];
      await this.entityManager.query(query, params);
      return 'User Added Successfully';
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
  public async getAllUserRoles(): Promise<any> {
    try {
      const query: string = 'call userrolegetall()';
      return await this.entityManager.query(query);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }


}
