import { Module } from '@nestjs/common';
import { ApiRmController } from './api-rm.controller';
import { ApiRmService } from './api-rm.service';

@Module({
  controllers: [ApiRmController],
  providers: [ApiRmService]
})
export class ApiRmModule {}
