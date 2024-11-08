import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor() {
    this.logger.log('EmailService initialized 🚀');
  }

  sendEmail(message: string) {
    this.logger.log(`Enviando email: ${message}`);
  }
}
