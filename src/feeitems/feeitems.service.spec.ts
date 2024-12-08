import { Test, TestingModule } from '@nestjs/testing';
import { FeeitemsService } from './feeitems.service';

describe('FeeitemsService', () => {
  let service: FeeitemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeeitemsService],
    }).compile();

    service = module.get<FeeitemsService>(FeeitemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
