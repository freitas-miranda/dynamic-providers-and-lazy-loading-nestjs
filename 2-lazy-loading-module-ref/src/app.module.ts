import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { NotificationService } from './notification/notification.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [NotificationModule],
  providers: [NotificationService],
})
export class AppModule {}
