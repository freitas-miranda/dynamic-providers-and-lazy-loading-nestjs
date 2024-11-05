# Projeto NestJS | Lazy Loading Module

Este projeto demonstra como utilizar o Lazy Loading Modular com ModuleRef no NestJS. A aplicação inclui um serviço de notificação que pode enviar mensagens via email ou SMS, carregando os serviços de forma lazy.

## Quando Usar

Lazy Loading Modular é útil quando queremos melhorar a performance da aplicação carregando módulos sob demanda, em vez de carregá-los todos na inicialização. Isso é especialmente benéfico em aplicações grandes ou quando alguns módulos são usados raramente.

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
  - **main.ts**: Arquivo de inicialização da aplicação.
  - **app.module.ts**: Módulo principal da aplicação.
  - **app.controller.ts**: Controlador principal da aplicação.
  - **notification/**
    - **notification.module.ts**: Módulo de notificação.
    - **notification.service.ts**: Serviço de notificação que gerencia o envio de mensagens.
    - **providers/**
      - **email.service.ts**: Serviço de envio de emails.
      - **sms.service.ts**: Serviço de envio de SMS.
