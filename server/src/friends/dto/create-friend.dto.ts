import { UserStatus } from '../../users/user-Status.enum';
export class CreateFriendDto {
    user_id: BigInt;
    name: string;
    email: string;
    ShareStatus: UserStatus;
    friends:string[];
}