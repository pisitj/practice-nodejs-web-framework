// https://docs.nestjs.com/first-steps
// https://github.com/lujakob/nestjs-realworld-example-app

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
