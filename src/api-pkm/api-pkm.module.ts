import { Module } from '@nestjs/common';
import { ApiPkmController } from './api-pkm.controller';
import { ApiPkmService } from './api-pkm.service';

@Module({
  controllers: [ApiPkmController],
  providers: [ApiPkmService]
})
export class ApiPkmModule {}
