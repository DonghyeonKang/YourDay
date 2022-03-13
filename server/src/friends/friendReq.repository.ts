import { EntityRepository, Repository } from 'typeorm';
import { CreateFriendDto } from './dto/create-friend.dto';
import { Body, NotFoundException } from '@nestjs/common';
import { User } from '../users/user.entity';
import { ReceivedReq } from './entities/friendReq.entity';


@EntityRepository(ReceivedReq)
export class ReceivedReqRepository extends Repository<ReceivedReq> {
    

    async createReceivedReq(username: string,
        createReceivedReqDto: User,
    ): Promise<any> {
        const { name, email } = createReceivedReqDto;

        // console.log(`레파지토리: ${JSON.stringify(createReceivedReqDto)}`);
        
        const ReceivedReq = this.create({
            name,
            email,
            user: createReceivedReqDto,
        });
        await this.save(ReceivedReq);
        return ReceivedReq;
    }

    



    async deleteFriendRequest(id: any): Promise<any> {
        const result = await this.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`존재하지 않는 received_req__id: ${id} 입니다`);
        }
        
        return result;

    }

    
}