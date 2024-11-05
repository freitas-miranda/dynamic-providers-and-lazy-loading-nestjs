// notification.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { EmailService } from './providers/email.service';
import { SmsService } from './providers/sms.service';

@Injectable()
export class NotificationService {
  private emailService?: EmailService;
  private smsService?: SmsService;
  private readonly logger = new Logger(NotificationService.name);

  constructor(private moduleRef: ModuleRef) {}

  async sendNotification(type: 'email' | 'sms', message: string) {
    const service = await this.getService(type);

    if (!service) {
      this.logger.error(`Unsupported notification type: ${type}`);
      return;
    }

    service.send(message);
  }

  private async getService(type: 'email' | 'sms') {
    const serviceFactory = {
      email: async () => {
        if (!this.emailService) {
          this.emailService = await this.moduleRef.create(EmailService);
        }
        return {
          send: (message: string) => this.emailService!.sendEmail(message),
        };
      },
      sms: async () => {
        if (!this.smsService) {
          this.smsService = await this.moduleRef.create(SmsService);
        }
        return {
          send: (message: string) => this.smsService!.sendSms(message),
        };
      },
    };

    const serviceCreator = serviceFactory[type];

    if (!serviceCreator) {
      return;
    }

    return serviceCreator();
  }
}
