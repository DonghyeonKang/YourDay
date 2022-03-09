import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScheduleRepository } from './schedule.repository';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(ScheduleRepository)
        private scheduleRepository: ScheduleRepository,
      ) {}

    // schedule 테이블에서 user_id 가 id 인 사용자의 데이터를 가져온다. 
    async getData(id) {
        const data = await this.scheduleRepository.find({ user: id });
        return data;
    }

    // 데이터를 모두 정리하면, 기존의 스케쥴은 초기화 한다. 
    async initializeTable() {
        await this.scheduleRepository.clear(); 
    }
}
