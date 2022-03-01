import { Controller, Get, Param } from '@nestjs/common';
import { ChartService } from './mydays.service';
import { Chart } from './mydays.entity';

@Controller('mydays')
export class ChartController {
    constructor(private chartService: ChartService) {}

    @Get('/:id')
    getChartData(@Param('id') id: string): Promise<Chart[]> {
        return this.chartService.getChartData(id);
    }
}
