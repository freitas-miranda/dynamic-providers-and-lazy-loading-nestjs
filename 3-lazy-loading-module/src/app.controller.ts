import { Controller, Get, Query } from '@nestjs/common';
import { LazyModuleLoader, ModuleRef } from '@nestjs/core';
import { NotificationModule } from './notification/notification.module';
import { NotificationService } from './notification/notification.service';

@Controller('notify')
export class AppController {
  private notificationModuleRef: ModuleRef | null = null;

  constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

  @Get()
  async notify(@Query('type') type: 'email' | 'sms', @Query('message') message: string) {
    // Carregar o NotificationModule de forma lazy apenas uma vez
    if (!this.notificationModuleRef) {
      this.notificationModuleRef = await this.lazyModuleLoader.load(() => NotificationModule);
    }

    // Resolver o NotificationService usando ModuleRef
    const notificationService = this.notificationModuleRef.get(NotificationService);

    // Enviar a notificação
    await notificationService.sendNotification(type, message);
    return { status: 'Notification sent' };
  }
}
