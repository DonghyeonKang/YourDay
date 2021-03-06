import { EntityRepository, Repository } from 'typeorm';
import { CreateFriendDto } from '../dto/create-friend.dto';
import { Body, NotFoundException } from '@nestjs/common';
import { User } from '../../users/user.entity';
import { ReceivedReq } from '../entities/friendReq.entity';


@EntityRepository(ReceivedReq)
export class ReceivedReqRepository extends Repository<ReceivedReq> {
    

    async getUserFriendReq() {
        //TODO session email 수정
        const session_email = "dbstn6477@gmail.com";

        const result = await this
            .createQueryBuilder('received_req')
            .innerJoin('received_req.user', 'user')
            .where('user.email = :email', { email: session_email })
            .getMany();
        
        return result;
    }

    async createReceivedReq(createReceivedReqDto: User,
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

    async checkUserFriendReq(email: string) {
        //TODO session email 수정
        const session_email = "dbstn6477@gmail.com"; //check할때 쓰인다.

        const gmail = email + "@gmail.com";
        const result = await this
            .createQueryBuilder('received_req')
            .innerJoin('received_req.user', 'user')
            .where('user.email = :email', { email: gmail })
            .getMany();

        let check = Boolean(false);
        result.map((req)=> {
            if(req.email === session_email){
                check = Boolean(true);
            }
        });
        return check;

    }
    



    async deleteFriendRequest(id: any): Promise<any> {
        const result = await this.delete(id);

        if (result.affected === 0) {
            throw new NotFoundException(`존재하지 않는 received_req__id: ${id} 입니다`);
        }
        
        return result;

    }

    
}