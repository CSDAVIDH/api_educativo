import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDetailDto } from './create-user-details.dto';


export class UpdateUsersDetailDto extends PartialType(CreateUsersDetailDto) {}
