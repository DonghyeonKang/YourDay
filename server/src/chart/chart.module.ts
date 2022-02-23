import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartController } from './chart.controller';
import { ChartRepository } from './chart.repository';
import { ChartService } from './chart.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChartRepository])
  ],
  controllers: [ChartController],
  providers: [ChartService]
})
export class ChartModule {}
