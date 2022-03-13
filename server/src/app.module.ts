import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ChartModule } from './mydays/mydays.module';
import { FriendsModule } from './friends/friends.module';
import { join } from 'path/posix';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "irosh",
      password: "syoro223",
      database: "yourday",
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true
    }),
    UsersModule,
    AuthModule,
    ChartModule,
    FriendsModule,
  ],
})
export class AppModule {}
