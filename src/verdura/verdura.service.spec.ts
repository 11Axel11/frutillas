import { Test, TestingModule } from '@nestjs/testing';
import { VerduraService } from './verdura.service';

describe('VerduraService', () => {
  let service: VerduraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerduraService],
    }).compile();

    service = module.get<VerduraService>(VerduraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
