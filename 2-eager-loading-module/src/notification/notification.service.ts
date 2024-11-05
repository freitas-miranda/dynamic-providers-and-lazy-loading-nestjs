// notification.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from './providers/email.service';
import { SmsService } from './providers/sms.service';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    private readonly emailService: EmailService,
    private readonly smsService: SmsService,
  ) {}

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
        return {
          send: (message: string) => this.emailService!.sendEmail(message),
        };
      },
      sms: async () => {
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
