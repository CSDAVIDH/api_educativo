import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersDetailsService } from '../services/users.details.service';
import { CreateUsersDetailDto } from '../dto/create-user-details.dto';
import { UpdateUsersDetailDto } from '../dto/update-user-details.dto';


@Controller('usersdetails')
export class UsersDetailsController {
  constructor(private readonly usersDetailService: UsersDetailsService ) { }

  @Post()
  create(@Body() createUsersDetailDto: CreateUsersDetailDto) {
    return this.usersDetailService.create(createUsersDetailDto);
  }

  @Get()
  findAll() {
    return this.usersDetailService.findAll();
  }

  @Get(':userdat_id')
  findOne(@Param('userdat_id') userdat_id: number) {
    return this.usersDetailService.findOne(userdat_id);
  }

  @Put(':userdat_id')
  update(@Param('userdat_id') userdat_id: number, @Body() updateUsersDetailDto: UpdateUsersDetailDto) {
    return this.usersDetailService.update(userdat_id, updateUsersDetailDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':userdat_id')
  remove(@Param('userdat_id') userdat_id: number) {
    return this.usersDetailService.remove(userdat_id);
  }
}
