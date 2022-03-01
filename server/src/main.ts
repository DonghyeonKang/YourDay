import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // 가장 큰 모듈

async function bootstrap() {  //3001 포트로 실행
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3001);
  console.log("Connected to 3001");
}
bootstrap();
// npm run start:dev 로 실행

