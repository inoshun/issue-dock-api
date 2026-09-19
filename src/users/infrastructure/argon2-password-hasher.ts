import argon2 from 'argon2';
import type { IPasswordHasher } from '../application/interfaces.js';
import type { Password } from '../domain/value-objects/password.js';

export class Argon2PasswordHasher implements IPasswordHasher {
  async hash(password: Password): Promise<string> {
    return await argon2.hash(password.value);
  }
}
