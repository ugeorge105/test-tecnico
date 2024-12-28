import { Test, TestingModule } from '@nestjs/testing';
import { ApiPkmService } from './api-pkm.service';

describe('ApiPkmService', () => {
  let service: ApiPkmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiPkmService],
    }).compile();

    service = module.get<ApiPkmService>(ApiPkmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
