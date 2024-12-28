import { Test, TestingModule } from '@nestjs/testing';
import { ApiPkmController } from './api-pkm.controller';

describe('ApiPkmController', () => {
  let controller: ApiPkmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiPkmController],
    }).compile();

    controller = module.get<ApiPkmController>(ApiPkmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
