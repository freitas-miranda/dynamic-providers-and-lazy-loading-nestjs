# Projeto NestJS | Lazy Loading Request

Este projeto demonstra o padrão do NestJS ao utilizar o Lazy Loading Request. Neste padrão, os providers com o decorator `@Injectable({ scope: Scope.REQUEST }` são carregados apenas quando são solicitados e descartados após o uso.

## Quando Usar

O Lazy Loading Request é útil quando você deseja que um provider seja instanciado apenas quando for necessário e descartado após o uso. Isso é útil para providers que possuem dependências pesadas ou que não são utilizados com frequência.

## Testando a Aplicação

### Enviar Notificação por Email

Para testar o envio de notificação por email, execute o seguinte comando:
```bash
curl 'http://localhost:3000/notify/email?message=Quinzenal%20backend'
```

### Enviar Notificação por SMS

Para testar o envio de notificação por SMS, execute o seguinte comando:
```bash
curl 'http://localhost:3000/notify/sms?message=Quinzenal%20backend'
```

## Estrutura do Projeto

- **src/**
  - **main.ts**: Arquivo de inicialização da aplicação.
  - **app.module.ts**: Módulo principal da aplicação.
  - **notification/**
    - **notification.module.ts**: Módulo de notificação.
    - **controllers/**
      - **email.controller.ts**: Controlador para rota de e-mail.
      - **sms.controller.ts**: Controlador para rota de SMS.
    - **providers/**
      - **email.service.ts**: Serviço de envio de emails.
      - **sms.service.ts**: Serviço de envio de SMS que utiliza o Scope.REQUEST.
