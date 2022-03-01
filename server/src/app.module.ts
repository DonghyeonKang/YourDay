import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "gold3819",
      "database": "user_db",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
    UsersModule,
    AuthModule],
})
export class AppModule {}
