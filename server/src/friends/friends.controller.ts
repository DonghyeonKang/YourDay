import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { Friend } from './friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { map } from 'rxjs';

@Controller('friends')
export class FriendsController {
  constructor(
    private friendService: FriendsService,
    private usersService: UsersService,
  ) {}

  //@Body() createFriendDto: CreateFriendDto,

  //createFriend(@Body() createFriendDto: CreateFriendDto,
  // @Body() user: User): any {
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
}
