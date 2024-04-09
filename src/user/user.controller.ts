import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';

@Controller('users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
