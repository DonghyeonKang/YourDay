import { User } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<any>;
    deleteUser(id: number): Promise<void>;
    getUserById(id: number): Promise<String>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
