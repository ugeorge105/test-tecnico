import { Test, TestingModule } from '@nestjs/testing';
import { ApiRmService } from './api-rm.service';

describe('ApiRmService', () => {
  let service: ApiRmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiRmService],
    }).compile();

    service = module.get<ApiRmService>(ApiRmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
