import { EntityRepository, Repository } from 'typeorm';
import { Friend } from './friend.entity';
import { CreateFriendDto } from './dto/create-friend.dto';
import { Body } from '@nestjs/common';


@EntityRepository(Friend)
export class FriendRepository extends Repository<Friend> {
    
    async createFriend(@Body() createFriendDto: CreateFriendDto,
    username: string): Promise<any> {
        const { name } = createFriendDto;
        // console.log(`레파지토리: ${name}`);
        
        const friend = this.create({
            name,
            // user: username,
        });
        await this.save(friend);
        return friend;
        
    } 
}