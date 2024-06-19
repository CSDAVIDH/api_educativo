// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './services/users.service';
import { UsersDetails } from './entities/user.details.entity';
import { UsersDetailsController } from './controllers/users.details.controller';
import { UsersDetailsService } from './services/users.details.service';




@Module({
  imports: [TypeOrmModule.forFeature([User, UsersDetails])],
  providers: [UsersService, UsersDetailsService],
  controllers: [UsersDetailsController],
  exports: [UsersService] //EXPORTAR  USER MDULE PARA SER USADO POR OTRO MODULO
})
export class UsersModule { }