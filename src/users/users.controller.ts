import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { createUserSchema } from './dto/create-user.dto.js';
import type { CreateUserDto } from './dto/create-user.dto.js';

@Controller('users')
export class UsersController {
  @Post()
  @ApiOperation({
    summary: 'ユーザー登録',
  })
  createUser(
    @Body({ schema: createUserSchema })
    createUserDto: CreateUserDto,
  ) {
    // ユーザー作成のロジックをここに実装する

    // 仮のログ出力（機能実装時に消す）
    console.log('ユーザー作成リクエスト:', createUserDto.name);
    return { message: 'ユーザーが作成されました' };
  }
}
