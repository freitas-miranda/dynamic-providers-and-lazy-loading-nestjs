Para testar com email: 
curl 'http://localhost:3000/notify?type=email&recipient=test@example.com&message=Hello!'

Para testar com sms: 
curl 'http://localhost:3000/notify?type=sms&recipient=69999999999&message=Hello!'

´´´ts
// Antes de criar, verificamos se o serviço já existe para evitar instâncias desnecessárias.
if (!this.smsService) {
  // ModuleRef.create(): Garante que o serviço só será instanciado na primeira vez que for necessário.
  this.smsService = await this.moduleRef.create(SmsService);
}
´´´
