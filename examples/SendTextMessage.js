import WhatsAppApi from '@green-api/v1-whatsapp-api-client'

(async () => {
    const api = new WhatsAppApi(process.env.TOKEN || '')
    const response = await api.messages.sendTextMessage(process.env.PHONE_NUMBER || '', 'hello world')
    console.log(response.messages[0].id)
})();