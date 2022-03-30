import { Injectable, Body, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../../users/user.entity';
import { ReceivedReqRepository } from '../repositories/friendReq.repository';
import { ReceivedReq } from '../entities/friendReq.entity';

@Injectable()
export class FriendReqService {
    constructor(
        @InjectRepository(ReceivedReqRepository)
        private receivedReqRepository: ReceivedReqRepository,
    ){}

    getUserFriendReq(): Promise<any> {
        return this.receivedReqRepository.getUserFriendReq();
    } 

    createFriendReq(createFriendReqDto: User,
    ): Promise<ReceivedReq> {
        return this.receivedReqRepository.createReceivedReq(createFriendReqDto);
    }

    checkUserFriendReq(email: string) {
        return this.receivedReqRepository.checkUserFriendReq(email);
    }

    deleteFriendRequest(id: any): Promise<any> {
        return this.receivedReqRepository.deleteFriendRequest(id);
    }
}
