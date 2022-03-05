import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRepository } from './friend.repository';
import { UsersService } from '../users/users.service';
import { UsersController } from '../users/users.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FriendRepository]),
    UsersModule,
  ],
  controllers: [FriendsController],
  providers: [FriendsService]
})
export class FriendsModule {}
