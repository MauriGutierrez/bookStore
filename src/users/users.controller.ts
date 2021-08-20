import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {

  @Get()
  getUsers(): any{
    return [{id:0}]
  }
  @Get(':id')
  getUsersById(@Param('id') id: string): any{
    return {
      id: Number(id)
    }

  
  }


}
