import { Controller, Get, Post, Query, Param, Body, Ip, Headers, HostParam } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post(':name')
  postHello(@Headers() headers, @Query() query, @Param() param, @Body() body, @Ip() ipAddress) {
    console.log('request headers >> ', headers);
    console.log('query parameter >> ', query);
    console.log('path parameter >> ', param);
    console.log('request body', body);
    console.log('ip address >> ', ipAddress);
    return this.appService.postHello();
  }
}
