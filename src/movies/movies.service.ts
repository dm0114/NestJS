import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entitiy';

// database 생성 예정
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  // search(@Query('year') year: string) {
  //   return `This will return search ${year}`;
  // }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: string): boolean {
    this.movies.filter((movie) => movie.id === +id);
    return true;
  }
}
