import { Entity, BaseEntity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/user.entity';


@Entity()
export class ReceivedReq extends BaseEntity {
    @PrimaryGeneratedColumn()
    received_req__id: BigInt;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(() => User, (user) => user.received_reqs, {
        eager: false 
    })
    user: User;
}