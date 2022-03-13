import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto, SearchUserDto } from './dto/create-user.dto';
import { UserStatus } from './user-Status.enum';
import {
  NotAcceptableException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getUserName(): Promise<any> {
    //실제론 세션인 id로 가져옴 (req.session.id)에서 가져옴
    let id: BigInt = BigInt(0);
    const sessionName = '정윤수';
    let name = '';
    // let id = BigInt(Number.MAX_SAFE_INTEGER);
    //id = a.id;

    await this.find({ name: sessionName }).then((result) => {
      result.map((user) => {
        console.log(user);
        name = user.name;
      });
    });
    return name;
  }

  async getUserInfo(email: string): Promise<User[]> {
    //실제론 세션인 id로 가져옴 (req.session.id)에서 가져옴
    let id: BigInt = BigInt(0);

    //세션 수정
    // const sessionName = "정윤수";
    const gmail = email + '@gmail.com';
    const user = await this.find({ email:gmail });
    return user;
    // await this.find({name: name})
    // .then((user)=> {
    //     // console.log(user);
    //     return user;
    //     })
    // .catch((err)=>{
    //     return err.response;
    // });
  }

  async getUserAllFriends(): Promise<any> {
    // return this.find();

    //유저 정보 검수과정 더 필요

    const friend_list = await this.find();
    // console.log(friend_list);
    if (!friend_list) {
      throw new NotFoundException('친구목록이 비어있습니다');
    }

    const friends = [];
    friend_list.forEach((user) => {
      //친구 한명당
      friends.push(user.friends);
    });
    return friends;
  }

  async getAllUsersData() : Promise <any> {  // SELECT "user_id" FROM "user"
    return this.find();
}

  async getUserAllFriendReqs(): Promise<any> {
    const received_req__list = await this.find();
    // console.log(friend_list);
    if (!received_req__list) {
      throw new NotFoundException('요청목록이 비어있습니다');
    }

    const received_req = [];
    received_req__list.forEach((req) => {
      received_req.push(req.recived_reqs);
    });
    return received_req;
  }

  private async checkExistByEmail(emailAddress: string): Promise<boolean> {
    // console.log(emailAddress);
    const user = await this.findOne({ email: emailAddress });

    return user !== undefined;
  }

  private async checkExistByName(email: string): Promise<boolean> {
    const user = await this.find({ email });

    return user !== undefined;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { firstname, lastname, email } = createUserDto;

    const userName = firstname + lastname;
    console.log(userName);
    const userExist = await this.checkExistByEmail(email);

    if (!userExist) {
      //존재하지 않는 유저라면
      console.log('새로운 유저분 어서오세요. ');
      // throw new UnprocessableEntityException('해당 이메일은 가입된 계정입니다.')
      const user = this.create({
        name: userName,
        email,
        ShareStatus: UserStatus.ON,
      });

      await this.save(user);
      return user;
    }

    const emailFind = await this.find({ email });
    console.log(emailFind);
    emailFind.map((loginUser) => console.log(loginUser.name));
  }

  async getUserByEmail(email: string): Promise<String> {
    // const { name } = searchUserDto;
    //2
    const gmail = email + '@gmail.com';
    const exist = await this.checkExistByEmail(gmail);
    if (!exist) {
      //undifined일때 false
      throw new NotFoundException('해당 유저는 존재하지 않습니다');
    }

    const found = await this.find({ email: gmail });
    const map_user = found.map((a) => a.name);
    let found_user = '';
    map_user.forEach((v) => {
      found_user = v;
    });
    return found_user;
  }

  async checkUserFriendReq(email: string): Promise<any> {
    const gmail = email + '@gmail.com';
    const found = await this.find({ email: gmail });

    let check = Boolean(false);
    const session_email = "dbstn6477@gmail.com";
    found.forEach((req) => {
      req.recived_reqs.map((e) => {
        if(e.email === session_email){
          check = Boolean(true);
        }
      });
    });
    return check;
    
  }

  async deleteUser(id: number): Promise<any> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('삭제할려는 아이디는 존재하지 않습니다');
    }
  }
}
