import argon2 from 'argon2';
import type { IPasswordHasher } from '../application/interfaces.js';

export class Argon2PasswordHasher implements IPasswordHasher {
  async hash(password: string): Promise<string> {
    return await argon2.hash(password);
  }
}
