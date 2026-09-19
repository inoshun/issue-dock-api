import { IUserRepository } from '../application/interfaces.js';

type RegisteredUser = {
  email: string;
  name: string;
  password: string;
};

export class UserRepository implements IUserRepository {
  async register(user: RegisteredUser): Promise<void> {
    // ユーザーをデータベースに保存する処理を実装する

    // 仮のログ出力（機能実装時に消す）
    console.log('ユーザーをデータベースに保存:', user.name);
  }
}
