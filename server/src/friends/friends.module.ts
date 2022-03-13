import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRepository } from './friend.repository';
import { UsersService } from '../users/users.service';
import { UsersController } from '../users/users.controller';
import { UsersModule } from '../users/users.module';
import { FriendReqService } from './friendReq.service';
import { ReceivedReqRepository } from './friendReq.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([FriendRepository, ReceivedReqRepository]),
    UsersModule,
  ],
  controllers: [FriendsController],
  providers: [FriendsService, FriendReqService]
})
export class FriendsModule {}
