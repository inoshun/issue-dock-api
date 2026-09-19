import { z } from 'zod';

// ASCIIの記号: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
const asciiSymbolPattern = /[!-/:-@[-`{-~]/;

// 半角英数字・半角記号のみ。空白や日本語も不許可
const allowedPasswordCharactersPattern = /^[\x21-\x7E]+$/;

export const registerUserSchema = z.object({
  email: z.email().meta({
    title: 'メールアドレス',
    example: 'user@example.com',
  }),
  name: z.string().trim().min(2).max(100).meta({
    title: '表示名',
    example: '山田太郎',
  }),
  password: z
    .string()
    .min(8)
    .max(100)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(asciiSymbolPattern)
    .regex(allowedPasswordCharactersPattern)
    .meta({
      title: 'パスワード',
      description:
        '8〜100文字で、英大文字・英小文字・数字・記号をそれぞれ1文字以上含める',
      format: 'password',
      writeOnly: true,
      example: 'Example1!',
    }),
});

export type RegisterUserDto = z.infer<typeof registerUserSchema>;
