import { Email, InvalidEmailError } from '../../domain/value-objects/email.js';
import { Name, InvalidNameError } from '../../domain/value-objects/name.js';
import {
  Password,
  InvalidPasswordError,
} from '../../domain/value-objects/password.js';
import { IUserRepository } from '../interfaces.js';

type InvalidRegisterUserField = 'email' | 'name' | 'password';

export class InvalidRegisterUserInputError extends Error {
  constructor(readonly field: InvalidRegisterUserField) {
    super(`Invalid register user input: ${field}`);
    this.name = 'InvalidRegisterUserInputError';
  }
}

type RegisterUserCommand = {
  email: string;
  name: string;
  password: string;
};

export class RegisterUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(command: RegisterUserCommand) {
    try {
      const email = Email.create(command.email);
      const name = Name.create(command.name);
      const password = Password.create(command.password);

      return await this.userRepository.register({
        email: email.value,
        name: name.value,
        password: password.value,
      });
    } catch (error) {
      if (error instanceof InvalidEmailError) {
        throw new InvalidRegisterUserInputError('email');
      }

      if (error instanceof InvalidNameError) {
        throw new InvalidRegisterUserInputError('name');
      }

      if (error instanceof InvalidPasswordError) {
        throw new InvalidRegisterUserInputError('password');
      }

      throw error;
    }
  }
}
