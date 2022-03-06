import { Entity, BaseEntity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/user.entity';


@Entity()
export class ReceivedReq extends BaseEntity {
    @PrimaryGeneratedColumn()
    received_req__id: BigInt;
    
    @Column()
    name: string;

    @ManyToOne(type => User, user => user.recived_reqs, { eager: false })
    user: User;
}