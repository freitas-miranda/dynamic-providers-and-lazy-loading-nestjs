import { Injectable, Logger } from '@nestjs/common';
import { IPaymentService } from '../payment.interface';

@Injectable()
export class AarinPaymentService implements IPaymentService {
  private readonly logger = new Logger(AarinPaymentService.name);

  processPayment() {
    this.logger.log('💰 Processing payment with Aarin');
  }
}
