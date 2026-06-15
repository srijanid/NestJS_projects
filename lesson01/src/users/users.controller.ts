import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// This controller will handle /users route 
@Controller('users')
export class UsersController {
  /* 
  GET /users or /users?role=value
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
   */

  constructor(private readonly usersService: UsersService){}

  // query parameter
  @Get() //Get /users
  findAll(@Query('role') role?: 'INTERN'|'ENGINEER'|'ADMIN'){
    return []
  }

  @Get(':id') //Get /users/:id
  findOne(@Param('id',ParseIntPipe) id:number){
    return this.usersService.findOne(id)
  }

  // @Get('interns') //Get /users/:id
  // findAllInterns(){
  //   return []
  // }
  
  @Post() // Create new /users
  create(@Body(ValidationPipe) createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto)
  }

  @Patch(':id') // partial update /users
  update(@Param('id',ParseIntPipe) id:number ,@Body(ValidationPipe) updateUserDto: UpdateUserDto){
    return this.usersService.update(id,updateUserDto)
  } 

  @Delete(':id') // Delete /users
  deleteOne(@Param('id',ParseIntPipe) id:number){
    return this.usersService.findOne(id)
  }
}