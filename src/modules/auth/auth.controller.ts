import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDTO } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'supertest';
import { Roles } from './decorators/roles.decorators';
import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorators';

interface RequestwithUser extends Request {
  user: { email: string; role: string }
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService) { }
  @Post('register')
  register(@Body() registerDTO: RegisterDTO) {
    return this.authService.register(registerDTO)
  }
  @Post('login')
  login(@Body() loginDTO: LoginDTO) {
    return this.authService.login(loginDTO)
  }

  // controllser roles
  //@Get('profile')
  //@Roles(Role.USER)
  //@UseGuards(AuthGuard, RolesGuard)
  //profile(@Req() req: RequestwithUser) {
  //  return this.authService.profile(req.user)
  //}

  @Get('profile')
  @Auth(Role.USER)
  profile(@Req() req: RequestwithUser) {
    return this.authService.profile(req.user)
   }
}
