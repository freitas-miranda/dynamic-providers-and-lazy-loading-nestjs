import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { AppController } from './app.controller';

@Module({
  imports: [NotificationModule],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
