import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAllUser(): Promise<any>;
    getUserById(id: number): Promise<String>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
