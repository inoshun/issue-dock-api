import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { registerUserSchema } from './dto/register-user.dto.js';
import type { RegisterUserDto } from './dto/register-user.dto.js';
import { RegisterUserUseCase } from '../application/use-cases/register-user.use-case.js';

@Controller('users')
export class UsersController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  @Post()
  @ApiOperation({
    summary: 'ユーザー登録',
  })
  register(
    @Body({ schema: registerUserSchema })
    registerUserDto: RegisterUserDto,
  ) {
    return this.registerUserUseCase.execute({
      email: registerUserDto.email,
      name: registerUserDto.name,
      password: registerUserDto.password,
    });
  }
}
