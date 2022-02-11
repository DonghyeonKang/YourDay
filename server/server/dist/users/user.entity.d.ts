import { BaseEntity } from "typeorm";
import { UserStatus } from './user-Status.enum';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    loginStatus: UserStatus;
}
