import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";


export class CreateUsersDetailDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  readonly first_name: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  readonly last_name: string;

  @IsString({ each: true })
  readonly tags_dni: string[];

  @IsString()
  readonly phone: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly sex: string;


}
