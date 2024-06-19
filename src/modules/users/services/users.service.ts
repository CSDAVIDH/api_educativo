import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';




@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
   
  ) { }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(user_id: number) {
    const user = await this.usersRepository.findOne({
      where: { user_id },
   
    })
    if (!user) {
      throw new NotFoundException(`Users ID ${user_id} not found`);
    }
    return user;
  }

  async create(createUserDTO: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDTO);
    return this.usersRepository.save(newUser);
  }

  async update(user_id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(user_id, updateUserDto);
    return this.findOne(user_id);
  }

  async remove(user_id: number) {
    const user = await this.usersRepository.findOne({
      where: { user_id }
    })
    if (!user) {
      throw new NotFoundException(`Users ID ${user_id} not found`);
    }
    return this.usersRepository.delete(user_id);
  }
  async findOneByEmail(email: string) {
    return this.usersRepository.findOneBy({ email })
  }
}