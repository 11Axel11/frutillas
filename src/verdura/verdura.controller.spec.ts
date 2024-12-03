import { Test, TestingModule } from '@nestjs/testing';
import { VerduraController } from './verdura.controller';
import { VerduraService } from './verdura.service';

describe('VerduraController', () => {
  let controller: VerduraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerduraController],
      providers: [VerduraService],
    }).compile();

    controller = module.get<VerduraController>(VerduraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
