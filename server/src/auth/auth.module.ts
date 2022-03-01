import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
<<<<<<< HEAD
import { KakaoService } from './kakao.service';
import { HttpModule } from '@nestjs/axios';
=======

>>>>>>> b46d4a9ac3e5d03a8dfeb08cee7c0b501ebb85f5

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
