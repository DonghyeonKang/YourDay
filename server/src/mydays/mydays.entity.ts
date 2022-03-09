import { User } from "src/users/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chart extends BaseEntity {
    @PrimaryGeneratedColumn()
    chart_id: BigInt;

    @Column({default: null})   // 평균 시간 데이터
    time: number;

    @Column({default: null})   // 일일 = 2022-3-3, 주간 = 2022-3-1, 월간 = 2022-03
    date: string;

    @Column({default: null})   // mode 0은 일일데이터, 1은 주간데이터, 2는 월간 데이터
    mode: number;

    @ManyToOne(type => User, (user) => user.charts)
    user: User;
}
