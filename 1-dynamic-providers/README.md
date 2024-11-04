# Providers Baseados em Factories Dinâmicas

Este documento explica a utilização de Providers Baseados em Factories Dinâmicas no NestJS. Esse tipo de provider cria dependências com base em configurações passadas dinamicamente.

## Quando Usar

Providers Baseados em Factories Dinâmicas são úteis quando queremos criar um provider com base em uma configuração específica. Um exemplo comum é a seleção de um serviço de pagamento (como Aarin ou Pagar.me) de acordo com uma variável de ambiente.

## Exemplo de Implementação

### Passo 1: Definir a Interface do Serviço

```typescript
export interface PaymentService {
  processPayment(amount: number): void;
}
```

### Passo 2: Implementar os Serviços

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AarinPaymentService implements PaymentService {
  processPayment(amount: number) {
    console.log(`Processing payment of ${amount} with Aarin`);
  }
}

@Injectable()
export class PagarMePaymentService implements PaymentService {
  processPayment(amount: number) {
    console.log(`Processing payment of ${amount} with Pagar.me`);
  }
}
```

### Passo 3: Criar a Factory Dinâmica

```typescript
import { ConfigService } from '@nestjs/config';
import { AarinPaymentService } from './aarin-payment.service';
import { PagarMePaymentService } from './pagarme-payment.service';

export const PaymentServiceFactory = {
  provide: 'PaymentService',
  useFactory: (configService: ConfigService) => {
    const paymentProvider = configService.get<string>('PAYMENT_PROVIDER');
    if (paymentProvider === 'Aarin') {
      return new AarinPaymentService();
    } else {
      return new PagarMePaymentService();
    }
  },
  inject: [ConfigService],
};
```

### Passo 4: Registrar o Provider no Módulo

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentServiceFactory } from './payment-service.factory';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [PaymentServiceFactory],
  exports: ['PaymentService'],
})
export class PaymentModule {}
```

### Passo 5: Utilizar o Provider

```typescript
import { Inject, Injectable } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Injectable()
export class PaymentProcessor {
  constructor(
    @Inject('PaymentService') private readonly paymentService: PaymentService,
  ) {}

  process(amount: number) {
    this.paymentService.processPayment(amount);
  }
}
```

## Conclusão

Providers Baseados em Factories Dinâmicas são uma poderosa ferramenta no NestJS para criar dependências configuráveis dinamicamente. Eles permitem maior flexibilidade e adaptabilidade no desenvolvimento de aplicações.
