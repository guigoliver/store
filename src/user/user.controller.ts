import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
