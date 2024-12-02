import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentvitalsController } from './appointmentvitals.controller';
import { AppointmentvitalsService } from './appointmentvitals.service';

describe('AppointmentvitalsController', () => {
  let controller: AppointmentvitalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentvitalsController],
      providers: [AppointmentvitalsService],
    }).compile();

    controller = module.get<AppointmentvitalsController>(AppointmentvitalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
