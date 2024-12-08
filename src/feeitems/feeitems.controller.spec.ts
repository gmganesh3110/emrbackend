import { Test, TestingModule } from '@nestjs/testing';
import { FeeitemsController } from './feeitems.controller';
import { FeeitemsService } from './feeitems.service';

describe('FeeitemsController', () => {
  let controller: FeeitemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeeitemsController],
      providers: [FeeitemsService],
    }).compile();

    controller = module.get<FeeitemsController>(FeeitemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
