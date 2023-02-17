import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 진입점 -> 모듈 -> 컨트롤러 -> 서비스(컨트롤러가 리턴)
async function bootstrap() {
  // 모듈(어플리케이션의 일부분)에서 어플리케이션을 생성하며, 앱모듈은 루트모듈이다.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
