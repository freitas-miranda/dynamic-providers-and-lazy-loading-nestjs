# Projeto NestJS | Lazy Loading Provider

Este projeto demonstra como utilizar o Carregamento de Funcionalidades sob Demanda no NestJS. A aplicação inclui um serviço de notificação que pode enviar mensagens via email ou SMS, carregando os serviços de forma lazy.

## Quando Usar

Carregamento de Funcionalidades sob Demanda é útil quando queremos melhorar a performance da aplicação carregando serviços sob demanda, em vez de carregá-los todos na inicialização. Isso é especialmente benéfico em aplicações grandes ou quando alguns serviços são usados raramente.

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
    - **providers/**
      - **email.service.ts**: Serviço de envio de emails.
      - **sms.service.ts**: Serviço de envio de SMS.
  - **app.controller.ts**: Controlador principal da aplicação.
