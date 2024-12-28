import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiPkmService {
   
    constructor (private readonly httpservice: HttpService){}
                public async apiFindAll(){
                    const response = await firstValueFrom(
                    this.httpservice.get('https://pokeapi.co/api/v2/pokemon/'),
                    )
                return response.data
            }   



}
