import { UserStatus } from '../../users/user-Status.enum';
export class CreateFriendDto {
    user_id: BigInt;
    name: string;
    email: string;
    share_status: UserStatus;
    friends:string[];
}

// export class CreateReceivedReqDto {
//     user_id: BigInt;
//     name: string;
//     email: string;
//     share_status: UserStatus;
//     received_reqs: string[];
// }
