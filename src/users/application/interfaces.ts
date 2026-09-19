export interface IUserRepository {
  register(user: {
    email: string;
    name: string;
    password: string;
  }): Promise<void>;
}
