import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../users/user.entity';
import { ReceivedReqRepository } from './friendReq.repository';
import { ReceivedReq } from './entities/friendReq.entity';

@Injectable()
export class FriendReqService {
    constructor(
        @InjectRepository(ReceivedReqRepository)
        private receivedReqRepository: ReceivedReqRepository,
    ){}


    createFriendReq(username: string,
        createFriendReqDto: User,
    ): Promise<ReceivedReq> {
        return this.receivedReqRepository.createReceivedReq(username, createFriendReqDto);
    }
}
