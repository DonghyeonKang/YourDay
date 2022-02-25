import { BaseEntity } from "typeorm";
export declare class Chart extends BaseEntity {
    chart_id: number;
    time: number;
    date: number;
    mode: number;
    member_id: string;
}
