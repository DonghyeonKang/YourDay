import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Chart extends BaseEntity {
    @PrimaryGeneratedColumn()
    chart_id: number;

    @Column()
    time: number;

    @Column()
    date: number;

    @Column()   // mode 0은 일일데이터, 1은 주간데이터, 2는 월간 데이터
    mode: number;    

    @Column()
    member_id: string;    
}
