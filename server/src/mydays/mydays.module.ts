import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartController } from './mydays.controller';
import { ChartRepository } from './mydays.repository';
import { ChartService } from './mydays.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChartRepository])  // cron 에서 schedule service 를 가져다 쓰기 위함
  ],
  controllers: [ChartController],
  providers: [ChartService],
  exports: [ChartService]
})
export class ChartModule {}
