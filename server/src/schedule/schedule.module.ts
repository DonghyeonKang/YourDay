import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleRepository } from './schedule.repository'
import { ScheduleService } from './schedule.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([ScheduleRepository])
    ],
    providers: [ScheduleService],
    exports: [ScheduleService]  // cron service로 보내기 위함
  })
export class scheduleModule {}
  