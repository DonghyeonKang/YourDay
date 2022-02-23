import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { ChartModule } from './chart/chart.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UsersModule,
    AuthModule,
    ChartModule],
})
export class AppModule {}
