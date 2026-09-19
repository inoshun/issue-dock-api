export class InvalidPasswordError extends Error {
  constructor() {
    super('Invalid password');
    this.name = 'InvalidPasswordError';
  }
}

export class Password {
  private constructor(readonly value: string) {}

  private static isValidPassword(password: string): boolean {
    // ASCIIの記号: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
    const asciiSymbolPattern = /[!-/:-@[-`{-~]/;

    // 半角英数字・半角記号のみ。空白や日本語も不許可
    const allowedPasswordCharactersPattern = /^[\x21-\x7E]+$/;

    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      asciiSymbolPattern.test(password) &&
      allowedPasswordCharactersPattern.test(password) &&
      password.length >= 8 &&
      password.length <= 100
    );
  }

  static create(rawValue: string): Password {
    if (!this.isValidPassword(rawValue)) {
      throw new InvalidPasswordError();
    }

    return new Password(rawValue);
  }
}
