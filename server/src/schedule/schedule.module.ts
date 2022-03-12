import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleRepository } from './schedule.repository'
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([ScheduleRepository])
    ],
    providers: [ScheduleService],
    exports: [ScheduleService],
    controllers: [ScheduleController]  // cron service로 보내기 위함
  })
export class scheduleModule {}
  