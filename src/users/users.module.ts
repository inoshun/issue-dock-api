import { Module } from '@nestjs/common';
import { UsersController } from './presentation/users.controller.js';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case.js';
import { UserRepository } from './infrastructure/user-repository.js';

@Module({
  controllers: [UsersController],
  providers: [
    UserRepository,
    {
      provide: RegisterUserUseCase,
      inject: [UserRepository],
      useFactory: (userRepository: UserRepository) => {
        return new RegisterUserUseCase(userRepository);
      },
    },
  ],
})
export class UsersModule {}
