import type { IUserRepository, UserToAdd } from '../application/interfaces.js';
import type { Email } from '../domain/value-objects/email.js';

export class UserRepository implements IUserRepository {
  async add(user: UserToAdd): Promise<void> {
    // ユーザーをデータベースに保存する処理を実装する

    // 仮のログ出力（機能実装時に消す）
    console.log('ユーザーをデータベースに保存:', user.name);
  }

  async existsByEmail(email: Email): Promise<boolean> {
    // データベースからユーザーを検索する処理を実装する

    // 仮のログ出力（機能実装時に消す）
    console.log('メールアドレスでユーザーを検索:', email);
    return false; // 仮の戻り値（機能実装時に適切な値を返すようにする）
  }
}
