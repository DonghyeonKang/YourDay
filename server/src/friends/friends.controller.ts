import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { Friend } from './friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { User } from '../users/user.entity';

@Controller('friends')
export class FriendsController {
    constructor(private friendService: FriendsService) {}
    
    @Post('/')
    createFriend(@Body() createFriendDto: CreateFriendDto,
    @Body() user): Promise<any> {
        // console.log(user.name);
        const username = user.name;
        return this.friendService.createFriend(createFriendDto, username);
    }

}

// @GetUser() user:User