import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Chart } from "./mydays.entity"

@Injectable()
@EntityRepository(Chart)
export class ChartRepository extends Repository <Chart> {
    
}