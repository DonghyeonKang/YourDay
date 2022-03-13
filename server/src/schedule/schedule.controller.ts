import { Controller, Get, Param } from '@nestjs/common';
import { ScheduleService } from './schedule.service';


@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService: ScheduleService) {}

    @Get('/:id')
    getScheduleTimeData(@Param('id') id: string): any {
        return this.scheduleService.getTime(id);
    }

    @Get('/dayWasted/:id')
    getDayWastedTimeData(@Param('id') id: string): any {
        return this.scheduleService.getWastedTime(id);
    }
}
