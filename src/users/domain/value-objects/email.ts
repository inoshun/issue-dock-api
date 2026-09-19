export class InvalidEmailError extends Error {
  constructor() {
    super('Invalid email');
    this.name = 'InvalidEmailError';
  }
}

export class Email {
  private constructor(readonly value: string) {}

  private static isValidEmail(email: string): boolean {
    const emailPattern =
      /^(?:[A-Za-z0-9_'+-]+\.)*[A-Za-z0-9_'+-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;

    return emailPattern.test(email);
  }

  static create(rawValue: string): Email {
    const normalizedValue = rawValue.trim().toLowerCase();

    if (!this.isValidEmail(normalizedValue)) {
      throw new InvalidEmailError();
    }

    return new Email(normalizedValue);
  }
}
