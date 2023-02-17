import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// 데코레이터 - 클래스를 위해 작동하는 함수, 클래스에 함수 기능 추가
@Module({
  imports: [],
  controllers: [MoviesController], //url => 함수 실행
  providers: [MoviesService],
})
export class AppModule {}
