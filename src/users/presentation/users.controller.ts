import {
  Controller,
  Post,
  Body,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { registerUserSchema } from './dto/register-user.dto.js';
import type { RegisterUserDto } from './dto/register-user.dto.js';
import {
  RegisterUserUseCase,
  InvalidRegisterUserInputError,
  UserAlreadyExistsError,
} from '../application/use-cases/register-user.use-case.js';

@Controller('users')
export class UsersController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  @Post()
  @ApiOperation({
    summary: 'ユーザー登録',
  })
  async register(
    @Body({ schema: registerUserSchema })
    registerUserDto: RegisterUserDto,
  ) {
    try {
      return await this.registerUserUseCase.execute({
        email: registerUserDto.email,
        name: registerUserDto.name,
        password: registerUserDto.password,
      });
    } catch (error) {
      if (error instanceof InvalidRegisterUserInputError) {
        throw new BadRequestException();
      }

      if (error instanceof UserAlreadyExistsError) {
        throw new ConflictException();
      }

      throw error;
    }
  }
}
