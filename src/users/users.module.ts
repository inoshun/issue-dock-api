import { Module } from '@nestjs/common';
import { UsersController } from './presentation/users.controller.js';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case.js';
import { UserRepository } from './infrastructure/user-repository.js';
import { Argon2PasswordHasher } from './infrastructure/argon2-password-hasher.js';
import type {
  IPasswordHasher,
  IUserRepository,
} from './application/interfaces.js';
import { PASSWORD_HASHER, USER_REPOSITORY } from './users.tokens.js';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
    {
      provide: PASSWORD_HASHER,
      useClass: Argon2PasswordHasher,
    },
    {
      provide: RegisterUserUseCase,
      inject: [USER_REPOSITORY, PASSWORD_HASHER],
      useFactory: (
        userRepository: IUserRepository,
        passwordHasher: IPasswordHasher,
      ) => {
        return new RegisterUserUseCase(userRepository, passwordHasher);
      },
    },
  ],
})
export class UsersModule {}
