import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from './user-Status.enum';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    friend_id: BigInt;
    
    @Column()
    name: string;

    @Column()
    ShareStatus: UserStatus;
    
}