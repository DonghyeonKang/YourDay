import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { FriendsModule } from './friends/friends.module';
import { join } from 'path/posix';
@Module({
  imports: [
    TypeOrmModule.forRoot({
<<<<<<< HEAD
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'user_db',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
=======
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "gold3819",
      "database": "user_db",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
>>>>>>> b46d4a9ac3e5d03a8dfeb08cee7c0b501ebb85f5
    }),
    UsersModule,
    AuthModule,
    FriendsModule,
  ],
})
export class AppModule {}
