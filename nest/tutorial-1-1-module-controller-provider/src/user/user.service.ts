import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World from User.';
  }

  getUser(userId: string): string {
    return `User ID - ${userId}`;
  }
}
