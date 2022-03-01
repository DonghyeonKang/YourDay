import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartController } from './mydays.controller';
import { ChartRepository } from './mydays.repository';
import { ChartService } from './mydays.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChartRepository])
  ],
  controllers: [ChartController],
  providers: [ChartService]
})
export class ChartModule {}
