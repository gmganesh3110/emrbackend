import { Test, TestingModule } from '@nestjs/testing';
import { UserTypesController } from './user-role.controller';
import { UserTypesService } from './user-role.service';

describe('UserTypesController', () => {
  let controller: UserTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTypesController],
      providers: [UserTypesService],
    }).compile();

    controller = module.get<UserTypesController>(UserTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
