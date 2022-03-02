import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';
import { UserStatus } from './user-Status.enum';
import { NotAcceptableException, NotFoundException, UnprocessableEntityException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {


    async getUserName() : Promise<any> {
        //실제론 세션인 id로 가져옴 (req.session.id)에서 가져옴
        let id: BigInt = BigInt(0);
        const sessionName = "정윤수";
        let name = "";
        // let id = BigInt(Number.MAX_SAFE_INTEGER);
        //id = a.id;
        
        
        await this.find({name: sessionName})
        .then((result)=> {
            result.map((user)=> {
                console.log(user);
                name = user.name;
            });
        });
        return name ;
    }

    async getUserInfo() : Promise<any> {
        //실제론 세션인 id로 가져옴 (req.session.id)에서 가져옴
        let id: BigInt = BigInt(0);
        const sessionName = "정윤수";
    
        await this.find({name: sessionName})
        .then((user)=> {
            return user;
            })
        .catch((err)=>{
            return err.response;
        });

    }
        
        
    

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



    private async checkExistByEmail(emailAddress: string) : Promise<boolean> {
        const user = await this.findOne({email: emailAddress});
        
        return user !== undefined;
    }

    private async checkExistByName(name: string) : Promise<boolean> {
        const user = await this.findOne({name});
        
        return user !== undefined;
    }



    async createUser(createUserDto: CreateUserDto) : Promise<User> {
        const { firstname, lastname, email } = createUserDto;
        
        const userName = firstname + lastname;
        console.log(userName);
        const userExist = await this.checkExistByEmail(email);
        
        if(!userExist) { //존재하지 않는 유저라면
            console.log("존재하지 않는 유저네? 만들어줌")
            // throw new UnprocessableEntityException('해당 이메일은 가입된 계정입니다.')
            const user = this.create({
                name: userName,
                email,
                ShareStatus: UserStatus.ON,
            })
    
            await this.save(user);
            return user;
        }


        const emailFind = await this.find({email});
        console.log(emailFind);
        emailFind.map( (loginUser)=> console.log(loginUser.name));
    }
        
        
      
    


    async getUserById(name: string) : Promise<String> {
        // const { name } = searchUserDto;
        //2
        
        
        const exist = await this.checkExistByName(name);
        if(!exist) {//undifined일때 false
            throw new NotFoundException("해당 유저는 존재하지 않습니다");
        }

        const found = await this.find({name});
        const mapFriend = found.map(a=>a.name);
        let foundFriend = "";
        mapFriend.forEach((v) => {
            foundFriend = v;
        });
        return foundFriend;
        
    }

    async deleteUser(id: number) : Promise<any> {
        const result = await this.delete(id);
        
        if(result.affected === 0){
            throw new NotFoundException('삭제할려는 아이디는 존재하지 않습니다');
        }
    }
}