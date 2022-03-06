import { EntityRepository, Repository } from 'typeorm';
import { Friend } from './entities/friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { Body } from '@nestjs/common';
import { User } from '../users/user.entity';


@EntityRepository(Friend)
export class FriendRepository extends Repository<Friend> {
    

    async createFriend(username: string,
        createFriendDto: User,
    ): Promise<any> {
        const { name } = createFriendDto;
        // createFriendDto.name;
        // console.log(`레파지토리: ${JSON.stringify(createFriendDto.name)}`);

        const friend = this.create({
            name,
            user: createFriendDto,
        });
        await this.save(friend);
        return friend;
    } 

    
}