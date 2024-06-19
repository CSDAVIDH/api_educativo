import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";


export class RegisterDTO extends PartialType(CreateUserDto){


  //REMPLAZADO POR ESTENDS CREATEUSERDTO
  //@Transform(({ value }) => value.trim())
  //@IsString()
  //@MinLength(3)
  //first_name: string;

  //@IsString()
  //last_name: string;

  //@IsEmail()
  //email: string;

  //@Transform(({ value }) => value.trim())
  //@IsString()
  //@MinLength(6)
  //password_hash: string;

  //@IsString()
  //role: string;
}


