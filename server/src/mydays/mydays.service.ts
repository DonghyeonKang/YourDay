import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chart } from './mydays.entity';
import { ChartRepository } from './mydays.repository';

@Injectable()
export class ChartService {
    constructor(
        @InjectRepository(ChartRepository) private chartRepository: ChartRepository, //@InjectRepository(ChartRepository) 데코레이터를 넣어주어야 한다.
      ) {}
    
    async getChartData(id: string): Promise<Chart[]> {    // member의 모든 데이터 가져오기
        const chart = await this.chartRepository.find({chart_id: id});
        return chart;
    }

    // 차트 데이터 추가. 동기로 처리할 필요는 없는 것 같다. 
    saveUserChart(userData): void {      
        this.chartRepository.saveUserChart(userData);
    }
}