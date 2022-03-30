import { type } from 'os';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserStatus } from './user-Status.enum';
import { Friend } from 'src/friends/entities/friend.entity';
import { ReceivedReq } from '../friends/entities/friendReq.entity';
import { Schedule } from 'src/schedule/schedule.entity';
import { ChartWeek } from 'src/chart/entities/chart_week.entity';
import { ChartMonth } from 'src/chart/entities/chart_month.entity';
import { ChartYear } from 'src/chart/entities/chart_year.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: BigInt;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  day_Count: number;

  @Column()
  ShareStatus: UserStatus;

  @OneToMany(() => ReceivedReq, (received_req) => received_req.user, {
    eager: true
  })
  received_reqs?: ReceivedReq[];

  @OneToMany(() => Friend, (friend) => friend.user, { eager: true })
  friends?: Friend[];

  @OneToMany((type) => ChartWeek, (chart) => chart.user, { eager: true }) 
  weekCharts: ChartWeek[];

  @OneToMany((type) => ChartMonth, (chart) => chart.user, { eager: true })
  monthCharts: ChartMonth[];

  @OneToMany((type) => ChartYear, (chart) => chart.user, { eager: true })
  yearCharts: ChartYear[];

  @OneToMany((type) => Schedule, (schedule) => schedule.user, { eager: true })
  schedules: Schedule[];
}
