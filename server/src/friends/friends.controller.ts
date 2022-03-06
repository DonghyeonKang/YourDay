import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { Friend } from './entities/friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { map } from 'rxjs';
import { FriendReqService } from './friendReq.service';

@Controller('friends')
export class FriendsController {
  constructor(
    private friendService: FriendsService,
    private usersService: UsersService,
    private friendReqService: FriendReqService,
  ) {}

  //@Body() createFriendDto: CreateFriendDto,

  //createFriend(@Body() createFriendDto: CreateFriendDto,
  // @Body() user: User): any {
    //친구 등록
  @Post('/')
  createFriend(@Body() name): any {
    const foundUser = this.usersService.getUserInfo('정윤수');
    foundUser
      .then((user) => {
        user.forEach((info) => {
          return this.friendService.createFriend('정윤수', info);
        });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  //친구 요청 보내는 곳
  @Post('/send')
  sendFriendRequest(@Body() name): any {
    const foundUser = this.usersService.getUserInfo('정윤수');
    foundUser
      .then((user) => {
        // this.friendService.createFriend();
        user.forEach((info) => {
          console.log(info);
          return this.friendReqService.createFriendReq('정윤수', info);
        });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

}
