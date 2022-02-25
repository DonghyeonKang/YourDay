import { Chart } from './chart.entity';
import { ChartRepository } from './chart.repository';
export declare class ChartService {
    private chartRepository;
    constructor(chartRepository: ChartRepository);
    getChartData(id: string): Promise<Chart[]>;
}
