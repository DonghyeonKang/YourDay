import { Controller, Get, Param } from '@nestjs/common';
import { Chart } from './chart.entity';
import { ChartService } from './chart.service';

@Controller('chart')
export class ChartController {
    constructor(private chartService: ChartService) {}

    @Get('/:id')
    getChartData(@Param('id') id: string): Promise <Chart[]> {
        return this.chartService.getChartData(id);
    }
}
