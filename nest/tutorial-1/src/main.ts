// https://docs.nestjs.com/first-steps
// https://github.com/lujakob/nestjs-realworld-example-app

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Global ValidationPipe
  await app.listen(3000);
}
bootstrap();
