import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards,Req } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

// google Authentication
import { AuthGuard } from '@nestjs/passport';



@Controller('mypage')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get('/google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {
    }

    @Get('auth/google/callback')
    @UseGuards(AuthGuard('google'))
    googleAuthredirect(@Req() req){
        return this.usersService.googleLogin(req)
    }

    // @Get('/')
    // getAllUsers(): Promise<any> {
    //     return this.usersService.getAllUser();
    // }

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
    createUser(@Body() a): Promise<User>{
        // createUserDto.name = ' ';
        console.log(`유저정보: ${a}`);
        //이렇게 하면 undefined 뜸 Body가 아니라, 다른 걸 써야할지도
        
        return a;
        // return this.usersService.createUser(createUserDto);
    }

   
    

    
}
