// notification.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { EmailService } from './email.service';
import { SmsService } from './sms.service';

@Injectable()
export class NotificationService {
  private emailService?: EmailService;
  private smsService?: SmsService;
  private readonly logger = new Logger(NotificationService.name);

  constructor(private moduleRef: ModuleRef) {}

  async sendNotification(
    type: 'email' | 'sms',
    recipient: string,
    message: string,
  ) {
    if (type === 'email') {
      if (!this.emailService) {
        this.logger.log('Initializing EmailService lazily...');
        this.emailService = await this.moduleRef.create(EmailService);
      }
      this.emailService.sendEmail(recipient, message);
    } else if (type === 'sms') {
      if (!this.smsService) {
        this.logger.log('Initializing SmsService lazily...');
        this.smsService = await this.moduleRef.create(SmsService);
      }
      this.smsService.sendSms(recipient, message);
    }
  }
}
