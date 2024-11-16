import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserTypesService } from './user-role.service';
import { CreateUserTypeDto } from './dto/user-role.dto';

@Controller('user-roles')
export class UserTypesController {
  constructor(private readonly userTypesService: UserTypesService) {}

  @Post()
  public async createUserRole(
    @Body() createUserTypeDto: CreateUserTypeDto,
  ): Promise<any> {
    return this.userTypesService.createUserRole(createUserTypeDto);
  }

  @Get()
  public async getAllUserRoles(): Promise<any> {
    return this.userTypesService.getAllUserRoles();
  }
}
