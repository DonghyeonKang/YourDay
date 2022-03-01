import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendRepository } from './friend.repository';
import { Friend } from './friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';

@Injectable()
export class FriendsService {
    constructor(
        @InjectRepository(FriendRepository)
        private friendRepository: FriendRepository,
    ){}


    createFriend(@Body() createFriendDto: CreateFriendDto,
    username: string): Promise<any> {
        return this.friendRepository.createFriend(createFriendDto, username);
    }
    


}
