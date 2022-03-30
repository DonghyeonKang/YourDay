import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Schedule } from "./schedule.entity"

@Injectable()
@EntityRepository(Schedule)
export class ScheduleRepository extends Repository <Schedule> {
    async deleteYesterdaySchedule(date) {
        await this.createQueryBuilder()
        .delete()
        .from(Schedule)
        .where('date = :date', {date: date})
        .execute();
    }
}
