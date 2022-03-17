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
import { ChartWeek } from 'src/mydays/entities/mydays_week.entity';
import { ChartMonth } from 'src/mydays/entities/mydays_month.entity';
import { ChartYear } from 'src/mydays/entities/mydays_year.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: BigInt;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  ShareStatus: UserStatus;

  @OneToMany((type) => ReceivedReq, (recived_req) => recived_req.user, {
    eager: true,
  })
  recived_reqs: ReceivedReq[];

  @OneToMany((type) => Friend, (friend) => friend.user, { eager: true })
  friends: Friend[];

  @OneToMany((type) => ChartWeek, (chart) => chart.user, { eager: true }) // 다른 데이터 조회시 연관된 데이터 모두 가져오기 때문에 낭비일 수 있다.
  weekCharts: ChartWeek[]; // 한 사람이 여러개의 Chart를 가짐

  @OneToMany((type) => ChartMonth, (chart) => chart.user, { eager: true })
  monthCharts: ChartMonth[];

  @OneToMany((type) => ChartYear, (chart) => chart.user, { eager: true })
  yearCharts: ChartYear[];

  @OneToMany((type) => Schedule, (schedule) => schedule.user, { eager: true })
  schedules: Schedule[]; // 한 사람이 여러개의 Chart를 가짐
}
