import { Module } from '@nestjs/common';
import { SmsService } from './providers/sms.service';
import { EmailService } from './providers/email.service';

@Module({
  providers: [EmailService, SmsService],
  exports: [EmailService, SmsService],
})
export class NotificationModule {}
