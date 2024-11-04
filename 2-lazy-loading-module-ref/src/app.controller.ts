import { Controller, Get, Query } from '@nestjs/common';
import { NotificationService } from './notification/notification.service';

@Controller('notify')
export class AppController {
  constructor(private notificationService: NotificationService) {}

  @Get()
  async notify(
    @Query('type') type: 'email' | 'sms',
    @Query('recipient') recipient: string,
    @Query('message') message: string,
  ) {
    await this.notificationService.sendNotification(type, recipient, message);
    return { status: 'Notification sent' };
  }
}
