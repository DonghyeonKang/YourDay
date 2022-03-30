import { Controller, Get, Param } from '@nestjs/common';
import { ChartService } from './chart.service';
import { ChartWeek } from './entities/chart_week.entity';

@Controller('mydays')
export class ChartController {
    constructor(private chartService: ChartService) {}

    @Get('/:id')
    getChartData(@Param('id') id: string): Promise<any[]> {
        return this.chartService.getChartData(id);
    }
}
