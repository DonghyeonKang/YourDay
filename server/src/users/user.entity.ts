import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from './user-Status.enum';
import { Friend } from '../friends/entities/friend.entity';
import { ReceivedReq } from '../friends/entities/friendReq.entity';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id: BigInt;
    
    @Column()
    name: string;
    
    @Column()
    email: string;

    @Column()
    ShareStatus: UserStatus;
    
    @OneToMany(type => ReceivedReq, recived_req => recived_req.user, { eager: true })
    recived_reqs: ReceivedReq[];
    
    @OneToMany(type => Friend, friend => friend.user, { eager: true })
    friends: Friend[];

    

}