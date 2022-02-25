import { ChartService } from './mydays.service';
import { Chart } from './mydays.entity';
export declare class ChartController {
    private chartService;
    constructor(chartService: ChartService);
    getChartData(id: string): Promise<Chart[]>;
}
