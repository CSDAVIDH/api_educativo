import { Transform } from "class-transformer"
import { IsEmail, IsString, MinLength } from "class-validator"

export class LoginDTO {
  @IsEmail()
  email: string

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password_hash: string
}