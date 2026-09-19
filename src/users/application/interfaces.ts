export type UserToAdd = {
  email: string;
  name: string;
  passwordHash: string;
};

export interface IUserRepository {
  add(user: UserToAdd): Promise<void>;
}

export interface IPasswordHasher {
  hash(password: string): Promise<string>;
}
