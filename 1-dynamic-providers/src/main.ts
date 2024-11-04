import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const paymentService = app.get('PaymentService');
  paymentService.processPayment();
  await app.close();
}

bootstrap();
