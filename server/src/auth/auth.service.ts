import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { HttpService } from '@nestjs/axios';
// import { Observable } from 'rxjs';
// import { AxiosResponse } from "axios";

@Injectable()
export class AuthService {

  // constructor(private httpService: HttpService) {}


  
  // findAll(): Observable<AxiosResponse<any>> {
  //   const _url = "http://localhost:3000/mypage/login";

  //   const req = this.httpService.get(_url);
  //   return req;
  // }
    
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
