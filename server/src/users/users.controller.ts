
import { ConsoleLogger, Header, Request, Res, Response, Session } from '@nestjs/common';

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards,Req } from '@nestjs/common';

import { User } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from "axios";

// google Authentication
import { AuthGuard } from '@nestjs/passport';
import { stringify } from 'querystring';



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
        const user = req.user;
        console.log(req.user);
        return this.usersService.createUser(user);
    }


    @Get('/')
    getUserName(): Promise<any> {
        return this.usersService.getUserName();
    }

    @Get('/info')
    getUserInfo(@Body('name') email: string): any {
        // console.log(name.name);
        return this.usersService.getUserInfo(email);
    }


    @Get('/friendList')
    getUserAllFriends(): Promise<any> {
        return this.usersService.getUserAllFriends();
    }

    @Get('/friendReqList')
    getUserAllFriendReqs(): Promise<any> {
        return this.usersService.getUserAllFriendReqs();    
    }

    
    //윤수 찾을 때,
    @Get('/friendList/edit/:email')
    getUserByEmail(@Param('email') email: string): Promise<String> {
        return this.usersService.getUserByEmail(email);
    }

    //편집(삭제, 찾을때)
    @Delete('/friendList/edit/:id')
    deleteUser(@Param('id', ParseIntPipe) id:number): Promise<void> {
        return this.usersService.deleteUser(id);
    }
    

    //요청 목록 중복처리
    @Post('/check/req')
    checkUserFriendReq(@Body('email') email:string): any{
        return this.usersService.checkUserFriendReq(email);
    }

    // @Get('/friendList/edit')
    // getUserById(@Body() searchUserDto: SearchUserDto): Promise<String> {
    //     return this.usersService.getUserById(searchUserDto);
    // }

    //윤수 만들 때,
    @Post('/login')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any>{
        
        // return console.log(body);
        // @Response() res
        // return console.log(res.req.body);
        
        const {
            firstname: fn,
            lastname: ln,
            email: e,
        } = createUserDto;

        console.log(e);
        
        // console.log(`넘어온 데이터 ${}`);

        return this.usersService.createUser(createUserDto);
    }

   
}

    
    

