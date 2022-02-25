import { BaseEntity } from "typeorm";
import { UserStatus } from './user-Status.enum';
export declare class User extends BaseEntity {
    friend_id: BigInt;
    name: string;
    ShareStatus: UserStatus;
}
