import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthModule } from 'src/auth/auth.module';
import { GoogleStrategy } from 'src/google.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
  ],  //User module에서 Repository 쓸 준비완료(typerom,entity)
  controllers: [UsersController],
  providers: [UsersService, GoogleStrategy],
  exports: [UsersService]
})
export class UsersModule {}
