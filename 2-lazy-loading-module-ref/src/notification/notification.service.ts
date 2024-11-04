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
    const service = await this.getService(type);
    service.send(recipient, message);
  }

  private async getService(type: 'email' | 'sms') {
    const serviceFactory = {
      email: async () => {
        if (!this.emailService) {
          this.logger.log('Initializing EmailService lazily...');
          this.emailService = await this.moduleRef.create(EmailService);
        }
        return {
          send: (recipient: string, message: string) =>
            this.emailService!.sendEmail(recipient, message),
        };
      },
      sms: async () => {
        if (!this.smsService) {
          this.logger.log('Initializing SmsService lazily...');
          this.smsService = await this.moduleRef.create(SmsService);
        }
        return {
          send: (recipient: string, message: string) =>
            this.smsService!.sendSms(recipient, message),
        };
      },
    };

    const serviceCreator = serviceFactory[type];
    if (!serviceCreator) {
      throw new Error(`Unsupported notification type: ${type}`);
    }

    return serviceCreator();
  }
}
