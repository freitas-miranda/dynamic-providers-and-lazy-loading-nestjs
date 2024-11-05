# Projeto NestJS | Eager Loading Module

Este projeto demonstra o padrão do NestJS ao utilizar o Eager Loading como forma de carregar módulos na inicialização da aplicação. A aplicação inclui um serviço de notificação que pode enviar mensagens via email ou SMS.

## Quando Usar

Eager Loading é o padrão do NestJS para carregar módulos na inicialização da aplicação. Isso é útil quando queremos carregar todos os módulos na inicialização, mesmo que alguns deles sejam usados raramente.

## Testando a Aplicação

### Enviar Notificação por Email

Para testar o envio de notificação por email, execute o seguinte comando:
```bash
curl 'http://localhost:3000/notify?type=email&message=Hello!'
```

### Enviar Notificação por SMS

Para testar o envio de notificação por SMS, execute o seguinte comando:
```bash
curl 'http://localhost:3000/notify?type=sms&message=Hello!'
```

## Estrutura do Projeto

- **src/**
  - **app.module.ts**: Módulo principal da aplicação.
  - **main.ts**: Arquivo de inicialização da aplicação.
  - **notification/**
    - **notification.module.ts**: Módulo de notificação.
    - **notification.service.ts**: Serviço de notificação que gerencia o envio de mensagens.
    - **email.service.ts**: Serviço de envio de emails.
    - **sms.service.ts**: Serviço de envio de SMS.
  - **app.controller.ts**: Controlador principal da aplicação.
