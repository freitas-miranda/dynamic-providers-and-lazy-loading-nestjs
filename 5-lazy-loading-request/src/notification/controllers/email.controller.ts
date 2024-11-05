import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from '../providers/email.service';

@Controller('notify')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('email')
  async notify(@Query('message') message: string) {
    this.emailService.sendEmail(message);
    return { status: 'Notification sent' };
  }
}
