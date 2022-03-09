import { Injectable } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { Chart } from "./mydays.entity"

@Injectable()
@EntityRepository(Chart)
export class ChartRepository extends Repository <Chart> {
    // 1일치 chart 데이터 저장
    async saveUserChart(chartData) {
        this.save(chartData);
    }
}
