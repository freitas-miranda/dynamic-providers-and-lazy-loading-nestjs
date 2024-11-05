import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationModule],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
