import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { SmsController } from './notification/controllers/sms.controller';
import { EmailController } from './notification/controllers/email.controller';

@Module({
  imports: [NotificationModule],
  providers: [],
  controllers: [SmsController, EmailController],
})
export class AppModule {}
