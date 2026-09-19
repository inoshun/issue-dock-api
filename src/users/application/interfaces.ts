import type { Email } from '../domain/value-objects/email.js';
import type { Password } from '../domain/value-objects/password.js';

export type UserToAdd = {
  email: string;
  name: string;
  hashedPassword: string;
};

export interface IUserRepository {
  add(user: UserToAdd): Promise<void>;
  existsByEmail(email: Email): Promise<boolean>;
}

export interface IPasswordHasher {
  hash(password: Password): Promise<string>;
}
