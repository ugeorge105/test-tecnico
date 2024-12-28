import { Get, Module, Param } from '@nestjs/common';
import { ApiRmController } from './api-rm.controller';
import { ApiRmService } from './api-rm.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  exports:[HttpModule],
  controllers: [ApiRmController],
  providers: [ApiRmService]
})
export class ApiRmModule {

  


}
