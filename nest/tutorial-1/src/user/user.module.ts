import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';

import { LoggerMiddleware } from '../common/middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // -----------------
    // for 'user' routes
    // -----------------
    // consumer.apply(LoggerMiddleware).forRoutes('user');
    // consumer.apply(LoggerMiddleware).forRoutes(UserController);

    // --------------------
    // only specific routes
    // --------------------
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'user/:id', method: RequestMethod.GET });

    // -----------------------
    // exclude specific routes
    // -----------------------
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'user/:id', method: RequestMethod.GET })
      .forRoutes(UserController);
  }
}
