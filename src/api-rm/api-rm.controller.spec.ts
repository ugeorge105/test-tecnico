import { Test, TestingModule } from '@nestjs/testing';
import { ApiRmController } from './api-rm.controller';

describe('ApiRmController', () => {
  let controller: ApiRmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiRmController],
    }).compile();

    controller = module.get<ApiRmController>(ApiRmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
