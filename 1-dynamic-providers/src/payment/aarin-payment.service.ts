import { Injectable, Logger } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Injectable()
export class AarinPaymentService implements PaymentService {
  private readonly logger = new Logger(AarinPaymentService.name);

  processPayment() {
    this.logger.log('💰 Processing payment with Aarin');
  }
}
