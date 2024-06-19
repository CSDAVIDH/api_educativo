import { Transform, Type } from 'class-transformer';
import { IsString, IsEmail, MinLength, ValidateNested } from 'class-validator';

import { CreateUsersDetailDto } from './create-user-details.dto';
import { Role } from 'src/modules/auth/enums/rol.enum';



export class CreateUserDto {

  @IsEmail()
  readonly email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  readonly password_hash: string;
 
  @IsString()
  user_details?: CreateUsersDetailDto;

}