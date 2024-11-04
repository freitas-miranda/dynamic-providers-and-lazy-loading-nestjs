import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { SmsService } from './sms.service';

@Module({
  providers: [EmailService, SmsService],
  exports: [EmailService, SmsService],
})
export class NotificationModule {}
