import { Injectable } from '@nestjs/common';
import { Me } from 'math-helpers';

@Injectable()
export class AppService {
  getHello(): Me {
    const r: Me = { everything: 'works' };
    return r;
  }
}
