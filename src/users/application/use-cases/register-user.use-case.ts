import { Email, InvalidEmailError } from '../../domain/value-objects/email.js';
import { Name, InvalidNameError } from '../../domain/value-objects/name.js';
import {
  Password,
  InvalidPasswordError,
} from '../../domain/value-objects/password.js';
import type { IPasswordHasher, IUserRepository } from '../interfaces.js';

export class InvalidRegisterUserInputError extends Error {
  constructor() {
    super('Invalid register user input');
    this.name = 'InvalidRegisterUserInputError';
  }
}

export class UserAlreadyExistsError extends Error {
  constructor() {
    super('User already exists');
    this.name = 'UserAlreadyExistsError';
  }
}

type RegisterUserCommand = {
  email: string;
  name: string;
  password: string;
};

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordHasher: IPasswordHasher,
  ) {}

  async execute(command: RegisterUserCommand) {
    try {
      const email = Email.create(command.email);
      const name = Name.create(command.name);
      const password = Password.create(command.password);

      const userExists = await this.userRepository.existsByEmail(email);

      if (userExists) {
        throw new UserAlreadyExistsError();
      }

      const passwordHash = await this.passwordHasher.hash(password.value);

      return await this.userRepository.add({
        email: email.value,
        name: name.value,
        passwordHash,
      });
    } catch (error) {
      if (
        error instanceof InvalidEmailError ||
        error instanceof InvalidNameError ||
        error instanceof InvalidPasswordError
      ) {
        throw new InvalidRegisterUserInputError();
      }

      throw error;
    }
  }
}
