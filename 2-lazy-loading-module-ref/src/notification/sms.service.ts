import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  sendSms(recipient: string, message: string) {
    this.logger.log(`Sending SMS to ${recipient}: ${message}`);
  }
}
