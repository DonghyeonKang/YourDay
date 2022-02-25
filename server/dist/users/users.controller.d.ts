import { User } from './user.entity';
import { UsersService } from './users.service';
import { SearchUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<any>;
    deleteUser(id: number): Promise<void>;
    getUserById(searchUserDto: SearchUserDto): Promise<String>;
    createUser(a: any): Promise<User>;
}
