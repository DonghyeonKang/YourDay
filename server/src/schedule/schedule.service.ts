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

    async getTime(id) {
        const data = await this.scheduleRepository.find({ user: id });
        let saveTime = 0;
        
        // 수행한 시간 계산
        let noneTime = 24;
        for (let i = 0; i < data.length; i++) {
          const start = new Date(data[i].start_time);
          const end = new Date(data[i].end_time);
          // 오차 수정
          start.setTime(
            start.getTime() - new Date().getTimezoneOffset() * 60 * 1000,
            );
          end.setTime(end.getTime() - new Date().getTimezoneOffset() * 60 * 1000);      
          // 시간 차이 계산
          const diffTime = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
          noneTime -= diffTime;
          saveTime += (diffTime / 100) * data[i].percent;      
        }
        saveTime = parseInt(saveTime.toFixed(1));
        const wasteTime = 24 - (saveTime + noneTime);
        const timeData = [saveTime, wasteTime, noneTime];
        return timeData;
      }

    // 데이터를 모두 정리하면, 기존의 스케쥴은 초기화 한다. 
    async initializeTable() {
        await this.scheduleRepository.clear(); 
    }
}
