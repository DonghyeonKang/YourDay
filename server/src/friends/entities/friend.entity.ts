import { Entity, BaseEntity, PrimaryColumn, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/user.entity';


@Entity()
export class Friend extends BaseEntity {
    @PrimaryGeneratedColumn()
    friend_id: BigInt;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(()=> User, (user) => user.friends, {
        eager: false
    })
    user: User;
}