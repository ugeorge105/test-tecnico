import { Controller, Get } from '@nestjs/common';
import { ApiPkmService } from './api-pkm.service';

@Controller()
export class ApiPkmController {
    constructor(private readonly apipkmservice: ApiPkmService) {}

    


}
