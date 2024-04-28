import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name should be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsEmail({ undefined, message: 'Email should be a valid email' })
  email: string;
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  password: string;
}
