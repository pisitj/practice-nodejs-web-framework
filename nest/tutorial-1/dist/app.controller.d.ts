import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postHello(headers: any, query: any, param: any, body: any, ipAddress: any): string;
}
