import { User } from "src/users/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChartWeek extends BaseEntity {
    @PrimaryGeneratedColumn()
    chart_id: BigInt;

    @Column({default: null})   // 평균 시간 데이터
    time: number;

    @Column({default: null})   // 일일 = 2022-3-3, 주간 = 2022-3-1, 월간 = 2022-03
    date: string;

    @ManyToOne(type => User, (user) => user.weekCharts)
    user: User;
}
