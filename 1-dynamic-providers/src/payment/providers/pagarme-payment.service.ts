import { Injectable, Logger } from '@nestjs/common';
import { IPaymentService } from '../payment.interface';

@Injectable()
export class PagarmePaymentService implements IPaymentService {
  private readonly logger = new Logger(PagarmePaymentService.name);

  processPayment() {
    this.logger.log('💰 Processing payment with Pagar.me');
  }
}
