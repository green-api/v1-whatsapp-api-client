import WhatsAppApi from ".";

(async () => {

    const api = new WhatsAppApi(process.env.TOKEN || '')
    const response  = await api.messages.sendTextMessage(process.env.PHONE_NUMBER || '', 'hello world')
    expect(response.messages[0]).toHaveProperty('id')

})();