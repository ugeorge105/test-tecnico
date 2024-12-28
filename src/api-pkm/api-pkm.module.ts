import { Module } from '@nestjs/common';
import { ApiPkmController } from './api-pkm.controller';
import { ApiPkmService } from './api-pkm.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  controllers: [ApiPkmController],
  providers: [ApiPkmService],
  exports: [HttpModule,ApiPkmService],
})
export class ApiPkmModule {}
