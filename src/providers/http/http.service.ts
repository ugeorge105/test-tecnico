import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {
    constructor (private readonly httpservice: HttpService){}
        public async apiFindAll(){
            const response = await firstValueFrom(
            this.httpservice.get('https://rickandmortyapi.com/api/character'),
            )
        return response.data
    }

}

export class HttpCustomService2 {
    constructor (private readonly httpservice1: HttpService){}
        public async apiFindAll(){
            const response = await firstValueFrom(
            this.httpservice1.get('https://pokeapi.co/api/v2/pokemon/'),
            )
        return response.data
    }

}
export { HttpService };

