import { type } from 'os';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserStatus } from './user-Status.enum';
import { Friend } from 'src/friends/friend.entity';
import { Chart } from 'src/mydays/mydays.entity';
import { Schedule } from 'src/schedule/schedule.entity';

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

  @OneToMany((type) => Friend, (friend) => friend.user, { eager: true })
  friends: Friend[];

  @OneToMany(
    (type) => Chart, (chart) => chart.user, { eager: true }  // 다른 데이터 조회시 연관된 데이터 모두 가져오기 때문에 낭비일 수 있다.
  )
  charts: Chart[]; // 한 사람이 여러개의 Chart를 가짐

  @OneToMany(
    (type) => Schedule, (schedule) => schedule.user, { eager: true }  // 다른 데이터 조회시 연관된 데이터 모두 가져오기 때문에 낭비일 수 있다.
  )
  schedules: Schedule[]; // 한 사람이 여러개의 Chart를 가짐
}
