import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentresultsService } from './appointmentresults.service';

describe('AppointmentresultsService', () => {
  let service: AppointmentresultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentresultsService],
    }).compile();

    service = module.get<AppointmentresultsService>(AppointmentresultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
