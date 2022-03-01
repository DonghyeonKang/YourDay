import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRepository } from './friend.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([FriendRepository]),
  ],

  controllers: [FriendsController],
  providers: [FriendsService]
})
export class FriendsModule {}
