import { Chart } from './mydays.entity';
import { ChartRepository } from './mydays.repository';
export declare class ChartService {
    private chartRepository;
    constructor(chartRepository: ChartRepository);
    getChartData(id: string): Promise<Chart[]>;
}
