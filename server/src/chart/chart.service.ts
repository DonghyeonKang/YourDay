import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chart } from './chart.entity';
import { ChartRepository } from './chart.repository';


@Injectable()
export class ChartService {
    constructor(
        @InjectRepository(ChartRepository) private chartRepository: ChartRepository, //@InjectRepository(ChartRepository) 데코레이터를 넣어주어야 한다.
      ) {}
    
    async getChartData(id: string): Promise<Chart[]> {    // member의 모든 데이터 가져오기
        const chart = await this.chartRepository.find({member_id: id});
        return chart;
    }
}
