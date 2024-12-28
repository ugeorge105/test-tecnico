import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
    
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api1')
  public async listApi(){
    return this.appService.listApi()
  }
  /*
  @Get('api2')
  public async listApi1(){
    return this.appService.listApi1()
  }
  */

}
