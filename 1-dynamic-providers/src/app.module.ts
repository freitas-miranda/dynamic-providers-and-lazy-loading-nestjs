import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentProvider } from './payment/payment.provider';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [PaymentProvider],
})
export class AppModule {}
