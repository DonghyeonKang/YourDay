import {
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Header, 
  Res, 
  Query,
  ConsoleLogger,
} from '@nestjs/common';
import { url } from 'inspector';
import fetch from 'node-fetch';
import { KakaoService } from './kakao.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly kakaoService: KakaoService) {}

  @Get("kakaoLogin")
  @Header('Content-Type', 'text/html')
  getKakaoLoginPage():string {
    return `
      <div>
        <h1>카카오 로그인</h1>

        <form action="/auth/kakaoLoginLogic" method="GET">
          <input type="submit" value="카카오 로그인" />
        </form>

        <form action="/auth/kakaoLogout" method="GET">
          <input type="submit" value="카카오 로그아웃" />
        </form>
    `;
  }

  @Get('/kakaoLoginLogic')
  @Header('Content-Type', 'text/html')
  kakaoLoginLogic(@Res() res): void {
    const _hostName = 'https://kauth.kakao.com';
    const _restApiKey = '450af5f4744fcb0bc3d057ba542c7d6a';
    // 카카오 로그인 redirectURI 등록
    const _redirectUrl = 'http://127.0.0.1:3000/auth/kakaoLoginLogicRedirect';
    const url = `${_hostName}/oauth/authorize?client_id=${_restApiKey}&redirect_uri=${_redirectUrl}&response_type=code`;
    return res.redirect(url);
  }



  @Get('/kakaoLoginLogicRedirect')
  @Header('Content-Type', 'text/html')
  kakaoLoginLogicRedirect(@Query() qs, @Res() res):void {
    console.log(qs.code);

    const _restApiKey = '450af5f4744fcb0bc3d057ba542c7d6a';
    const _redirect_uri = 'http://127.0.0.1:3000/auth/kakaoLoginLogicRedirect';
    const _hostName = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${_restApiKey}&redirect_uri=${_redirect_uri}&code=${qs.code}`;
    const _headers = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    };
    this.kakaoService
      .login(_hostName, _headers)
      .then((e) => {
        // console.log(e);
        console.log(`TOKEN : ${e.data['access_token']}`);
        this.kakaoService.setToken(e.data['access_token']);
        this.kakaoUserInfo(e.data);
        return res.send(`
          <div>
            <h2>축하합니다!</h2>
            <p>카카오 로그인 성공하였습니다!</p>
            <a href="/auth/kakaoLogin">메인으로</a>
          </div>
        `);
      })
      .catch((err)=> {
        console.log(err);
        return res.send('error');
      });
  }

  @Get('/kakaoLogin')
  @Header('Content-Type', 'text/html')
  async kakaoUserInfo(@Res() res) {
    const _url = "https://kapi.kakao.com/v2/user/me";
    // console.log(res);
    const _headers = {
        'Authorization': `Bearer ${res.access_token}`,
    }
    // console.log(`토큰: ${res.access_token}`)
    this.kakaoService
      .showUserInfo(_url, _headers)
      .then((e)=> {
        console.log(e);
        // console.log("전송");
      })
      .catch((err)=> {
        console.log(err);
        return res.send('error');
      })



    }


    // 로그아웃 (일반적인 로그아웃, 토큰 만료)
    // @Get('/kakaoLogout')
    // @Header('Content-Type', 'text/html')
    // kakaoLogout(@Res() res): void {
      
    //   this.kakaoService
    //     .logout()
    //     .then((e)=>{
    //       console.log(e);
    //       return res.send(`
    //       <div>
    //         <h2>로그아웃 완료(토큰만료)</h2>
    //         <a href="/auth/kakaoLogin">메인 화면으로</a>
    //       </div>
    //     `);
    //     })
    //     .catch((err)=>{
    //       console.log(err);
    //       return res.send('logout error');
    //     })
    // }

    //로그 아웃 (탈퇴 or 다른 카카오 아이디로 로그인을 유도하는 경우, 로그 삭제)
    @Get('/kakaoLogout')
    @Header('Content-Type', 'text/html')
    kakaoLogout(@Res() res): void {
      
      this.kakaoService
        .deleteLog()
        .then((e)=>{
          console.log(e);
          return res.send(`
          <div>
            <h2>로그아웃 완료(로그삭제)</h2>
            <a href="/auth/kakaoLogin">메인 화면으로</a>
          </div>
        `);
        })
        .catch((err)=>{
          console.log(err);
          return res.send('logout error');
        })
    }

    


  

}
