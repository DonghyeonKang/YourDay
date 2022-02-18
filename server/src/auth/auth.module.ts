import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { KakaoService } from './kakao.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, KakaoService]
})
export class AuthModule {}
