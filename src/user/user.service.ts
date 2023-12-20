import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): any {
    return {
      code: 'mmm',
    };
  }
  addUsers(): any {
    return {
      code: 'ok',
    };
  }
}
