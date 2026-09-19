import type { Email } from '../domain/value-objects/email.js';

export type UserToAdd = {
  email: string;
  name: string;
  passwordHash: string;
};

export interface IUserRepository {
  add(user: UserToAdd): Promise<void>;
  existsByEmail(email: Email): Promise<boolean>;
}

export interface IPasswordHasher {
  hash(password: string): Promise<string>;
}
