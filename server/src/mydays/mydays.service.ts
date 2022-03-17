import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ChartMonthRepository,
  ChartWeekRepository,
  ChartYearRepository,
} from './mydays.repository';

@Injectable()
export class ChartService {
  constructor(
    @InjectRepository(ChartWeekRepository)
    private chartWeekRepository: ChartWeekRepository, //@InjectRepository(ChartRepository) 데코레이터를 넣어주어야 한다.
    @InjectRepository(ChartMonthRepository)
    private chartMonthRepository: ChartMonthRepository, //@InjectRepository(ChartRepository) 데코레이터를 넣어주어야 한다.
    @InjectRepository(ChartYearRepository)
    private chartYearRepository: ChartYearRepository, //@InjectRepository(ChartRepository) 데코레이터를 넣어주어야 한다.
  ) {}

  async getChartData(id: string): Promise<any[]> {
    // chart의 모든 데이터 가져오기
    const data = [];
    data.push(await this.getChartWeek(id));
    data.push(await this.getChartMonth(id));
    data.push(await this.getChartYear(id));
    
    return data;
  }

  //====================== week ========================//
  async getChartWeek(id: string): Promise<any[]> {
    // chart week 데이터 가져오기

    const chart = await this.chartWeekRepository.getChart();  
    return chart;
  }

  // 차트 데이터 추가. 동기로 처리할 필요는 없는 것 같다.
  saveChartWeek(userData): void {
    this.chartWeekRepository.save(userData);
  }

  // chart_week 테이블 초기화
  async initializeWeek() {
    this.chartWeekRepository.clear();
  }

  //====================== month ========================//
  // chart month 데이터 가져오기
  async getChartMonth(id: string): Promise<any[]> {
    const chart = await this.chartMonthRepository.getChart();
    return chart;
  }

  // 차트 데이터 추가. 동기로 처리할 필요는 없는 것 같다.
  saveChartMonth(userData): void {
    this.chartMonthRepository.save(userData);
  }

  // chart_month 테이블 초기화
  async initializeMonth() {
    this.chartMonthRepository.clear();
  }
  
  //====================== year ========================//
  // chart year 데이터 가져오기
  async getChartYear(id: string): Promise<any[]> {
    const chart = await this.chartYearRepository.getChart();
    return chart;
  }
  // 차트 데이터 추가. 동기로 처리할 필요는 없는 것 같다.
  saveChartYear(userData): void {
    this.chartYearRepository.save(userData);
  }
}
