import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { ChartModule } from 'src/chart/chart.module';
import { scheduleModule } from 'src/schedule/schedule.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ChartModule, scheduleModule, UsersModule],  // cron module 에서 사용할 다른 모듈들
  providers: [CronService]  // 이 모듈은 이 서비스를 제공함
})
export class CronModule {}  // 이 모듈을 제공함
