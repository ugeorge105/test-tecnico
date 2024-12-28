import { Global, Module } from '@nestjs/common';
import { HttpCustomService, HttpCustomService2} from './http/http.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports:[HttpModule],
  providers: [HttpCustomService, HttpCustomService2],
  exports:[HttpModule, HttpCustomService, HttpCustomService2]
})
export class ProvidersModule {}
