import { Repository } from "typeorm";
import { User } from './user.entity';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';
export declare class UserRepository extends Repository<User> {
    getAllUser(): Promise<any>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(searchUserDto: SearchUserDto): Promise<String>;
    deleteUser(id: number): Promise<any>;
}
