import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ChartModule } from './mydays/mydays.module';
import { FriendsModule } from './friends/friends.module';
import { join } from 'path/posix';
import { scheduleModule } from './schedule/schedule.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'irosh',
      password: 'syoro223',
      database: 'yourday',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ChartModule,
    FriendsModule,
    scheduleModule,
    CronModule
  ]
})
export class AppModule {}
