import { PagarmePaymentService } from './pagarme-payment.service';
import { AarinPaymentService } from './aarin-payment.service';
import { ConfigService } from '@nestjs/config';

export const PaymentProvider = {
  provide: 'PaymentService',
  useFactory: (configService: ConfigService) => {
    const provider = configService.get<string>('PAYMENT_PROVIDER');
    return provider === 'AARIN'
      ? new AarinPaymentService()
      : new PagarmePaymentService();
  },
  inject: [ConfigService],
};
