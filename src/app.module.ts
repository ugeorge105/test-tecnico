import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiPkmModule } from './api-pkm/api-pkm.module';
import { ApiRmModule } from './api-rm/api-rm.module';

@Module({
  imports: [ApiPkmModule, ApiRmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
