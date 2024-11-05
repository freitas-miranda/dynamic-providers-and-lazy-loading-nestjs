import { Controller, Get, Query } from '@nestjs/common';
import { SmsService } from '../providers/sms.service';

@Controller('notify')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Get('sms')
  async notify(@Query('message') message: string) {
    this.smsService.sendSms(message);
    return { status: 'Notification sent' };
  }
}
