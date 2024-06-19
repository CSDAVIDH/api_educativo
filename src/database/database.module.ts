import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersDetails } from 'src/modules/users/entities/user.details.entity';
import { User } from 'src/modules/users/entities/user.entity';


import { DataSourceOptions } from 'typeorm';


export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'userdev',
  password: 'secret1234',
  database: 'educativo_db',
  entities: [User,UsersDetails],
  synchronize: true,


}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return {
          ...dataSourceOptions,
        }
      }
    })],
})
export class DatabaseModule { }
