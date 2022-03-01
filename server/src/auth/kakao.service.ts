import { HttpService } from '@nestjs/axios';
import { Injectable, Body } from '@nestjs/common';
import { lastValueFrom, map, Observable, tap } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class KakaoService {
  check: boolean;
  accessToken: string;
  private http: HttpService;
  constructor() {
    this.check = false;
    this.http = new HttpService();
    this.accessToken = '';
  }
  loginCheck(): void {
    this.check = !this.check;
    return;
  }
  async login(url: string, headers: any): Promise<any> {
    return await lastValueFrom(this.http.post(url, '', { headers }));
  }
  setToken(token: string): boolean {
    this.accessToken = token;
    return true;
  }


  async showUserInfo(url: string, headers: any): Promise<any> {
    // console.log(`헤더: ${JSON.stringify(headers.headers)}`)
    const _url = "http://localhost:3000/mypage/login";
    const userInfo = await lastValueFrom(
        this.http.get(url, { headers })
    );
    // return userInfo.data.properties.nickname;
    // return console.log( `{ name: ${userInfo.data.properties.nickname} }`);
    
    //return this.http.post(_url, `{ name: ${userInfo.data.properties.nickname} }` , { } );
    
    // console.log(JSON.stringify({ name: userInfo.data.properties.nickname }));

    
    // const n = JSON.stringify(userInfo.data.properties.nickname );   const nickname = userInfo.data.properties.nickname;
    const email = userInfo.data.kakao_account.email;
    // console.log(userInfo.data.kakao_account.email);

    // return console.log(userInfo.data.kakao_account);
    
    // return this.http.post(_url, n, { } ).pipe(
    //   tap((resp) => console.log(resp)),
    //   map((resp) => resp.data),
    //   tap((data) => console.log(data)),
    // );

    // return this.http.post(_url, null, { }); 
    
    
    return await lastValueFrom(
      this.http.post(_url, {name: "김윤수", email: "dbstn1325@naver.com", }, { })
    );
    
  }


  async logout(): Promise<any> {
    const _url = 'https://kapi.kakao.com/v1/user/logout';
    const _headers = {
        Authorization: `Bearer ${this.accessToken}`,
    }; 
    console.log(this.accessToken);
    console.log(JSON.stringify(_headers));
    return await lastValueFrom(
      this.http.post(_url, '', { headers: _headers})
    );
  }

  async deleteLog(): Promise<any> {
      const _url = "https://kapi.kakao.com/v1/user/unlink";
      const _headers = {
        Authorization: `Bearer ${this.accessToken}`,
      }
      return await lastValueFrom(
          this.http.post(_url, '', { headers: _headers})
      )
  }
}
