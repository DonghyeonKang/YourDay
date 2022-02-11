import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';
import { UserStatus } from './user-Status.enum';
import { NotFoundException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async getAllUser() : Promise<any> {
        // return this.find();
        const list = await this.find();
        
        if(!list) {
            throw new NotFoundException('친구목록이 비어있습니다');
        }
        
        let FriendlistName = [];
        list.forEach( (friend) => {     //친구 한명당
            FriendlistName.push(friend.name);
        })
        return FriendlistName;
    }

    async createUser(createUserDto: CreateUserDto) : Promise<User> {
        const { name } = createUserDto;

        const user = this.create({
            name,
            ShareStatus: UserStatus.ON,
        })
        

        await this.save(user);
        return user;
    }


    async getUserById(searchUserDto: SearchUserDto) : Promise<String> {
        const { name } = searchUserDto;
        const found = await this.find({name});
        
        if(found.length <= 0) {
            throw new NotFoundException("해당 유저는 존재하지 않습니다");
        }

        const mapFriend = found.map(a=>a.name);
        let foundFriend = "";
        mapFriend.forEach((v) => {
            foundFriend = v;
        });
        return `${foundFriend} 찾았습니다`;
        
    }

    async deleteUser(id: number) : Promise<any> {
        const result = await this.delete(id);
        
        if(result.affected === 0){
            throw new NotFoundException('삭제할려는 아이디는 존재하지 않습니다');
        }
    }
}