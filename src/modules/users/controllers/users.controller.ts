//import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus, Put } from '@nestjs/common';
//import { UsersService } from './users.service';
//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
//
//
//
//@Controller('users')
//export class UsersController {
//  constructor(private readonly usersService: UsersService) { }
//
//  @Get()
//  findAll() {
//    return this.usersService.findAll();
//  }
//
//  @Get(':user_id')
//  findOne(@Param('user_id') user_id: number) {
//    return this.usersService.findOne(user_id);
//  }
//
//  @Post()
//  create(@Body() createUserDto: CreateUserDto) {
//    return this.usersService.create(createUserDto);
//  }
//
//  @Put(':user_id')
//  update(@Param('user_id') user_id: number, @Body() updateUserDto: UpdateUserDto) {
//    return this.usersService.update(user_id, updateUserDto);
//  }
//
//  @HttpCode(HttpStatus.NO_CONTENT)
//  @Delete(':user_id')
//  remove(@Param('user_id') user_id: number) {
//    return this.usersService.remove(user_id);
//  }
//}