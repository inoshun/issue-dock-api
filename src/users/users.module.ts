import { Module } from '@nestjs/common';
import { UsersController } from './presentation/users.controller.js';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case.js';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: RegisterUserUseCase,
      useFactory: () => new RegisterUserUseCase(),
    },
  ],
})
export class UsersModule {}
