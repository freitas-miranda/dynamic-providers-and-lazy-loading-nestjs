import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SmsService } from './providers/sms.service';
import { EmailService } from './providers/email.service';

@Module({
  providers: [NotificationService, EmailService, SmsService],
  exports: [NotificationService],
})
export class NotificationModule {}
