import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { FriendsService } from './services/friends.service';
import { Friend } from './entities/friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { map } from 'rxjs';
import { FriendReqService } from './services/friendReq.service';

@Controller('friends')
export class FriendsController {
  constructor(
    private friendService: FriendsService,
    private usersService: UsersService,
    private friendReqService: FriendReqService,
  ) {}

  @Get('/getAllFriends')
  getFriendByUser(): any {
    return this.friendService.getFriendByUser();
  }

  //친구 등록
  @Post('/')
  createFriend(@Body('email') email: string): any {
    const exist = this.friendService.checkUserFriend(email);
    
    return exist.then((result: boolean):any => {
      if (result !== false) {
        return "duplicated request";
      }
      // console.log(result);
      //TODO session_id 정보에 준 eamil을 넣어야
      //TODO 요청하는사람 getUserInfo & id뺴고
      return this.usersService.getSessionInfo()
        .then((user:any) => {
          user.forEach((info:any)=> {
            return this.friendService.createFriend(email, info);
          });
        })
        .catch((err)=> {
          return err;
        })

    })
  };


  @Get('/req/get')
  getUserFriendReq(): any {
    return this.friendReqService.getUserFriendReq();
  }

  //친구 요청 보내는 곳
  @Post('/req/send')
  sendFriendRequest(@Body('email') email: string): any {
    const exist_req = this.friendReqService.checkUserFriendReq(email);
    const exist_friend = this.friendService.checkFriendBeforeReq(email);

    return exist_req.then((result) => {
      return exist_friend.then((result2) => {
          if(result2) {
            return "duplicated friend";
          }
        
          if (result || result2) {
            return "duplicated request";
          }
          return this.usersService
            .getUserInfo(email)
            .then((user) => {
              user.forEach((info: any) => {
                // console.log(info);
                return this.friendReqService.createFriendReq(info);
              });
            })
            .catch((err) => {
              console.log(err);
              return err;
            });
        });
     });
  }
  //TODO 친구 체크
  


  @Delete('/req/delete/:id')
  deleteFriendRequest(@Param('id') id: any): Promise<any> {
    return this.friendReqService.deleteFriendRequest(id);
  }
}
