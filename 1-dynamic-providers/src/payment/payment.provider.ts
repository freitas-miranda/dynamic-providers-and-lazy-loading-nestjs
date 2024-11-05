import { ConfigService } from '@nestjs/config';
import { AarinPaymentService } from './providers/aarin-payment.service';
import { PagarmePaymentService } from './providers/pagarme-payment.service';

export const PaymentProvider = {
  provide: 'PaymentService',
  useFactory: (configService: ConfigService) => {
    const provider = configService.get<string>('PAYMENT_PROVIDER');
    return provider === 'AARIN' ? new AarinPaymentService() : new PagarmePaymentService();
  },
  inject: [ConfigService],
};
 