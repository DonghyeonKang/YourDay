import { Body, Injectable, NotFoundException, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository) //서비스안에서 Reposiory사용.
        private userRepository: UserRepository,
    ){}


    // 모든 사용자의 데이터를 가져옴 cron service에서 사용중
    getAllUsersData(): Promise<any> {  
        return this.userRepository.getAllUsersData();
    }



    getUserName(): Promise<any> {
        return this.userRepository.getUserName();
    }

    //Promise<any>
    async getSessionInfo(): Promise<any>{
        // console.log(`service: ${name}`);
        return this.userRepository.getSessionInfo();
    }

    async getUserInfo(email: string): Promise<any> {
        return this.userRepository.getUserInfo(email);
    }

    
    // googleLogin(req:any){
    //     console.log(req.user);
    //     if(!req.user){
    //         return "No User from google"
    //     }
    //     return {
    //         message : 'User Info from Google',
    //         user: req.user
    //     }
        
    // }



    ////윤수 찾기=> user.exist(id) -> const user = user.find(id, ) -> return user.name

    
    getUserByEmail(email: string): Promise <String> {
        return this.userRepository.getUserByEmail(email);
    }



    // getUserById(searchUserDto: SearchUserDto): Promise <String> {
    //     return this.userRepository.getUserById(searchUserDto);
    // }

    createUser(createUserDto: CreateUserDto) : Promise<User> {
        return this.userRepository.createUser(createUserDto);
    }

    deleteUser(id: number) : Promise<void> {
        return this.userRepository.deleteUser(id);
    }
    

    // private users: User[] = [];
    
    // getAllUsers(): User[] {
    //     return this.users;
    // }
}
