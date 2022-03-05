import { type } from "os";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserStatus } from './user-Status.enum';
import { Friend } from '../friends/friend.entity';

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
    
    @OneToMany(type => Friend, friend => friend.user, { eager: true })
    friends: Friend[];

}