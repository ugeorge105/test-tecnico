import { Injectable } from '@nestjs/common';
import { HttpCustomService, HttpCustomService2 } from './providers/http/http.service';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpCustomService,
    private readonly httpService1: HttpCustomService2
  ){}

  getHello(): string {
    return 'Waza mundo que pasa!';
  }


public async listApi(){
  return this.httpService.apiFindAll()
}
/*
public async listApi1(){
  return this.httpService1.apiFindAll()
}
*/
}