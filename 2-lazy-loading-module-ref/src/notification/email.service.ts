import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  sendEmail(recipient: string, message: string) {
    this.logger.log(`Sending email to ${recipient}: ${message}`);
  }
}
