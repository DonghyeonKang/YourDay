import { EntityRepository, Repository } from 'typeorm';
import { Friend } from '../entities/friend.entity';
import { CreateFriendDto } from '../dto/create-friend.dto';
import { Body } from '@nestjs/common';
import { User } from '../../users/user.entity';


@EntityRepository(Friend)
export class FriendRepository extends Repository<Friend> {
    
    async getFriendByUser() {
        //TODO session email 수정
        const session_email = "dbstn6477@gmail.com";

        const result = await this
            .createQueryBuilder('friend')
            .innerJoin('friend.user', 'user')
            .where('user.email = :email', { email: session_email })
            .getMany();
        return result;
    }

    async checkUserFriend(email: string) {
        //TODO session email 수정
        const session_email = "dbstn6477@gmail.com";

        const result = await this
            .createQueryBuilder('friend')
            .innerJoin('friend.user', 'user')
            .where('user.email = :email', { email: session_email })
            .getMany();

        let check = Boolean(false);
        result.map((friend)=> {
            if(friend.email === email) {
                check = Boolean(true);
            }
        });
        return check;
    }

    async checkFriendBeforeReq(email: string) {
        //TODO session email 수정
        const session_email = "dbstn6477@gmail.com";

        const gmail = email + "@gmail.com";

        const result = await this
            .createQueryBuilder('friend')
            .innerJoin('friend.user', 'user')
            .where('user.email = :email', { email: gmail })
            .getMany();

        let check = Boolean(false);
        result.map((friend)=> {
            if(friend.email === session_email) {
                check = Boolean(true);
            }
        });
        return check;
    }

    

    async createFriend(email: string, createFriendDto: User
    ): Promise<any> {
        const { name, email: gmail } = createFriendDto; 
        // createFriendDto.name;
        // console.log(`레파지토리: ${JSON.stringify(createFriendDto)}`);
        
        const friend = this.create({
            name,
            email:gmail,
            user: createFriendDto,
        });
        await this.save(friend);
        return friend;
    }



}