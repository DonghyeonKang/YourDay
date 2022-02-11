import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';

@Controller('mypage')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    

    @Get('/')
    getAllUsers(): Promise<any> {
        return this.usersService.getAllUser();
    }

    //편집(삭제, 찾을때)
    @Delete('/friendList/edit/:id')
    deleteUser(@Param('id', ParseIntPipe) id:number): Promise<void> {
        return this.usersService.deleteUser(id);
    }

    //윤수 찾을 때,
    @Get('/friendList/edit')
    getUserById(@Body() searchUserDto: SearchUserDto): Promise<String> {
        return this.usersService.getUserById(searchUserDto);
    }

    //윤수 만들 때,
    @Post('/login')
    createUser(@Body() createUserDto: CreateUserDto): Promise<User>{
        return this.usersService.createUser(createUserDto);
    }

   
    

    
}
