import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Ninjas!';
  }

  sayGoodbye(): string {
	  return 'Goodbye Ninjas';
  }
}
