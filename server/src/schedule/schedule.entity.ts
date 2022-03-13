import { User } from "src/users/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Schedule extends BaseEntity {
    @PrimaryGeneratedColumn()
    schedule_id: BigInt;

    @Column({ type: "text" })
    content: string;
    
    @Column({ type: 'datetime' })
    start_time: string;
    
    @Column({ type: 'datetime' })  
    end_time: string;
    
    @Column()
    percent: number;

    @ManyToOne(type => User, (user) => user.schedules)
    user: User;
}