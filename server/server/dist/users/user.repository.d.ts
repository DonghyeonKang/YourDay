import { Repository } from "typeorm";
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserRepository extends Repository<User> {
    getAllUser(): Promise<any>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<String>;
    deleteUser(id: number): Promise<any>;
}
