import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';

import { RegisterDTO } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDTO } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/services/users.service';






@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async register({ email, password_hash }: RegisterDTO) {

    const user = await this.usersService.findOneByEmail(email)
    if (user) {
      throw new BadRequestException('User already exists')
    }
    return await this.usersService.create({
      email,
      password_hash: await bcryptjs.hash(password_hash, 10), //hash of the password para no serguardado como texto plano
    }
    )
  }

  async login({ email, password_hash }: LoginDTO) {
    const user = await this.usersService.findOneByEmail(email)
    if (!user) {
      throw new UnauthorizedException('Email not found')
    }

    const isPasswordValid = await bcryptjs.compare(password_hash, user.password_hash)// se hase la inversa del hash para comparar contraseña
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password')
    }
    const payload = { email: user.email, role: user.role }
    const token = await this.jwtService.signAsync(payload) //generando el token utilizando un servicio por nest

    return {
      token, email
    }
  }
  async profile({ email, role }: { email: string; role: string }) {
    return await this.usersService.findOneByEmail(email);
  }
}
