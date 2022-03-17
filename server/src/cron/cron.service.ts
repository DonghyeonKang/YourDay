import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ChartService } from 'src/mydays/mydays.service';
import { ScheduleService } from 'src/schedule/schedule.service';
import { UsersService } from 'src/users/users.service';
import { ChartWeek } from 'src/mydays/entities/mydays_week.entity';

@Injectable()
export class CronService {
  constructor(
    private readonly scheduleModule: ScheduleService,
    private readonly chartService: ChartService,
    private readonly usersService: UsersService,
  ) {}

  // 매일 00시 00분 2초에 아래 함수 실행
  @Cron('2 0 0 * * *')
  async handleCron() {
    const userdata = await this.getUserList(); 

    for(let i = 0; i < userdata.length; i++) {
      // 각 사용자의 스케줄 데이터를 가져옴
      const scheduleData = await this.scheduleModule.getData(userdata[i].user_id);
      const totalTime = await this.getTime(scheduleData);
      await this.setData(userdata[i], totalTime.toFixed(1));
    }
    // schedule 테이블 초기화. 
    this.scheduleModule.initializeTable();
  }

  //사용자 데이터 가져옴
  async getUserList(): Promise<any> {
    const data = await this.usersService.getAllUsersData();    
    return data;
  }

  // 사용자의 스케줄 데이터의 시간을 계산함
  getTime(data) {
    let time = 0;    
    
    // 수행한 시간 계산
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
      time += (diffTime / 100) * data[i].percent;      
    }

    return time;
  }

  // 데이터를 저장함      
  async setData(userData, totalTime) {
    let date = new Date();

    // 시간 날짜 모드 chart 객체에 입력
    const chart = new ChartWeek();
    chart.time = totalTime;
    chart.date = String(date.getFullYear()) + "-" + String(date.getMonth() + 1) + "-" + String(date.getDate() - 1); // 시간 데이터 string으로 구성
    chart.user = userData;
    userData.charts.push(chart);

    await this.chartService.saveChartWeek(chart);
  }
}
