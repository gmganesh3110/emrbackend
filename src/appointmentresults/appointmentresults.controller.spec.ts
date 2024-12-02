import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentresultsController } from './appointmentresults.controller';
import { AppointmentresultsService } from './appointmentresults.service';

describe('AppointmentresultsController', () => {
  let controller: AppointmentresultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentresultsController],
      providers: [AppointmentresultsService],
    }).compile();

    controller = module.get<AppointmentresultsController>(AppointmentresultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
