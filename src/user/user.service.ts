import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(len: string): any {
    console.log(Number(len), len);
    if (isNaN(Number(len))) {
      return {
        code: 0,
        msg: 'error',
      };
    }
    return {
      code: 'mmm',
      data: Array.from({ length: Number(len) }, (_, index) => `${index + 1}`),
    };
  }
  addUsers(): any {
    return {
      code: 'ok',
    };
  }
}
