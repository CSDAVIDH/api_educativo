import { Injectable, NotFoundException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDetails } from '../entities/user.details.entity';
import { CreateUsersDetailDto } from '../dto/create-user-details.dto';
import { UpdateUsersDetailDto } from '../dto/update-user-details.dto';


@Injectable()
export class UsersDetailsService {
  constructor(
    @InjectRepository(UsersDetails)
    private readonly usersDetailRepository: Repository<UsersDetails>
  ) { }
  async create(createUsersdatDto: CreateUsersDetailDto) {
    const newUsersdat = this.usersDetailRepository.create(createUsersdatDto);
    return this.usersDetailRepository.save(newUsersdat);
  }

  async findAll() {
    return this.usersDetailRepository.find();
  }

  async findOne(userdat_id: number) {
    const userdat = await this.usersDetailRepository.findOne({
      where: { userdat_id }
    })
    if (!userdat) {
      throw new NotFoundException(`Usersdat ID ${userdat_id} not found`);
    }
    return userdat;
  }

  async update(userdat_id: number, updateUsersdatDto: UpdateUsersDetailDto) {
    await this.usersDetailRepository.update(userdat_id, updateUsersdatDto);
    return this.findOne(userdat_id)
  }

  async remove(userdat_id: number) {
    const userdat = await this.usersDetailRepository.findOne({
      where: { userdat_id }
    })
    if (!userdat) {
      throw new NotFoundException(`Usersdat ID ${userdat_id} not found`);
    }
    return this.usersDetailRepository.delete(userdat_id)
  }
}
