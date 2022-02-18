import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

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
    const userInfo = await lastValueFrom(
        this.http.get(url, { headers })
    );
    this.http.post("/mypage/login", '', { headers: userInfo.data} );

    
    // return await lastValueFrom(
    //   this.http.get(url, { headers })
    //  );
  }


  async logout(): Promise<any> {
    const _url = 'https://kapi.kakao.com/v1/user/logout';
    const _headers = {
        Authorization: `Bearer ${this.accessToken}`,
    };
    console.log(this.accessToken);
    console.log(JSON.stringify(_headers));
    return await lastValueFrom(
        this.http.post(_url, '', { headers: _headers })
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
