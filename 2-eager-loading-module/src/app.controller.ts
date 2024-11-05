import { Controller, Get, Query } from '@nestjs/common';
import { NotificationService } from './notification/notification.service';

@Controller('notify')
export class AppController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async notify(@Query('type') type: 'email' | 'sms', @Query('message') message: string) {
    await this.notificationService.sendNotification(type, message);
    return { status: 'Notification sent' };
  }
}
