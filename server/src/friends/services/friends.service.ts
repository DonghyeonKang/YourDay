import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendRepository } from '../repositories/friend.repository';
import { Friend } from '../entities/friend.entity';
import { User } from '../../users/user.entity';

@Injectable()
export class FriendsService {
    constructor(
        @InjectRepository(FriendRepository)
        private friendRepository: FriendRepository,
    ){}
    
    getFriendByUser() {
        return this.friendRepository.getFriendByUser();
    }
    
    checkUserFriend(email: string) {
        return this.friendRepository.checkUserFriend(email);
    }

    createFriend(email: string, createFriendDto: User,
    ): Promise<Friend> {
        return this.friendRepository.createFriend(email, createFriendDto);
    }

    checkFriendBeforeReq(email: string) {
        return this.friendRepository.checkFriendBeforeReq(email);
    }
    
}
