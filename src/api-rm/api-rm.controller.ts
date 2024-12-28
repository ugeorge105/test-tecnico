import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('api-rm')
export class ApiRmController {
    @Get()
  findAll()
  {
    return[]
  }

  @Get(':id')
  findOne(@Param('id')id: string){
    return {id}
  }

  @Post()
  create(@Body() user:{}){
    return user
  }
}
