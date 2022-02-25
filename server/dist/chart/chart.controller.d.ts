import { ChartService } from './chart.service';
export declare class ChartController {
    private chartService;
    constructor(chartService: ChartService);
    getChartData(id: string): object;
    getConn(): object;
}
