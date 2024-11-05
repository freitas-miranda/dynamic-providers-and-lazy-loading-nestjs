import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  constructor() {
    this.logger.log('SmsService initialized 🚀');
  }

  sendSms(message: string) {
    this.logger.log(`Enviando SMS: ${message}`);
  }
}
