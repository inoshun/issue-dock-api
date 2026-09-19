export class InvalidNameError extends Error {
  constructor() {
    super('Invalid name');
    this.name = 'InvalidNameError';
  }
}

export class Name {
  private constructor(readonly value: string) {}

  private static isValidName(name: string): boolean {
    return name.length >= 2 && name.length <= 100;
  }

  static create(rawValue: string): Name {
    const normalizedValue = rawValue.trim();

    if (!this.isValidName(normalizedValue)) {
      throw new InvalidNameError();
    }

    return new Name(normalizedValue);
  }
}
