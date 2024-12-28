import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiPkmModule } from './api-pkm/api-pkm.module';
import { ApiRmModule } from './api-rm/api-rm.module';
import { ProvidersModule } from './providers/providers.module';
import { HttpCustomService, HttpCustomService2 } from './providers/http/http.service';

@Module({
  imports: [ApiPkmModule, ApiRmModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService, HttpCustomService, HttpCustomService2],
})
export class AppModule {}
