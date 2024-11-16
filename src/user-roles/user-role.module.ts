import { Module } from '@nestjs/common';
import { UserTypesService } from './user-role.service';
import { UserTypesController } from './user-role.controller';

@Module({
  controllers: [UserTypesController],
  providers: [UserTypesService],
})
export class UserTypesModule {}
