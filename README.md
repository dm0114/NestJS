<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Nest JS로 API 만들기</p>

## 배운점
- `main.ts` : 진입점으로, AppModule(루트 모듈)로 어플리케이션 생성
  > ```module - 한 가지 역할을 하는 어플리케이션의 단위 ex) users, photos, vieos ... ```
  
  </br>
  
  ```javascript
  @Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
  })
  ```
  - 컨트롤러 : url을 가져와서 함수 실행
    - @Get, @Post ... : 라우팅


- 데코레이터 : 클래스를 위한 함수 (함수에 기능 추가)

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

