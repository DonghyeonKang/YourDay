import { EntityRepository, Repository } from 'typeorm';
import { CreateFriendDto } from './dto/create-friend.dto';
import { Body } from '@nestjs/common';
import { User } from '../users/user.entity';
import { ReceivedReq } from './entities/friendReq.entity';


@EntityRepository(ReceivedReq)
export class ReceivedReqRepository extends Repository<ReceivedReq> {
    

    async createReceivedReq(username: string,
        createReceivedReqDto: User,
    ): Promise<any> {
        const { name } = createReceivedReqDto;

        console.log(`레파지토리: ${JSON.stringify(createReceivedReqDto)}`);
        
        const ReceivedReq = this.create({
            name,
            user: createReceivedReqDto,
        });
        await this.save(ReceivedReq);
        return ReceivedReq;
    }

    
}