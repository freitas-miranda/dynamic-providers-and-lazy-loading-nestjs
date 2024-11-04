import { Injectable, Logger } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Injectable()
export class PagarmePaymentService implements PaymentService {
  private readonly logger = new Logger(PagarmePaymentService.name);

  processPayment() {
    this.logger.log('💰 Processing payment with Pagar.me');
  }
}
