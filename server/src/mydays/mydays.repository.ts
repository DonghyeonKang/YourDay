import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ChartMonth } from './entities/mydays_month.entity';
import { ChartWeek } from './entities/mydays_week.entity';
import { ChartYear } from './entities/mydays_year.entity';

@Injectable()
@EntityRepository(ChartWeek)
export class ChartWeekRepository extends Repository<ChartWeek> {
  async getChart() {
    const data = await this.createQueryBuilder('chart_week')
      .innerJoin('chart_week.user', 'user')
      .where('user.user_id = :id', { id: 1 })
      .getMany();
    console.log(data);
    return data;
  }
}

@Injectable()
@EntityRepository(ChartMonth)
export class ChartMonthRepository extends Repository<ChartMonth> {
  async getChart() {
    const data = await this.createQueryBuilder('chart_month')
      .innerJoin('chart_month.user', 'user')
      .where('user.user_id = :id', { id: 1 })
      .getMany();
    console.log(data);
    return data;
  }
}

@Injectable()
@EntityRepository(ChartYear)
export class ChartYearRepository extends Repository<ChartYear> {
  async getChart() {
    const data = await this.createQueryBuilder('chart_year')
      .innerJoin('chart_year.user', 'user')
      .where('user.user_id = :id', { id: 1 })
      .getMany();
    console.log(data);
    return data;
  }
}
