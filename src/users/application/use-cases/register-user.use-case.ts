interface RegisterUserCommand {
  email: string;
  name: string;
  password: string;
}

export class RegisterUserUseCase {
  execute(command: RegisterUserCommand) {
    // ユーザー作成のロジックをここに実装する

    // 仮のログ出力（機能実装時に消す）
    console.log('ユーザー作成リクエスト:', command.name);
  }
}
