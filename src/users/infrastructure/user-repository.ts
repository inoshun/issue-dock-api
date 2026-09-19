import type { IUserRepository, UserToAdd } from '../application/interfaces.js';

export class UserRepository implements IUserRepository {
  async add(user: UserToAdd): Promise<void> {
    // ユーザーをデータベースに保存する処理を実装する

    // 仮のログ出力（機能実装時に消す）
    console.log('ユーザーをデータベースに保存:', user.name);
  }
}
