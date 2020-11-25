import WhatsAppApi from '@green-api/v1-whatsapp-api-client'

(async () => {
    const api = new WhatsAppApi(process.env.TOKEN || '')
    await api.messages.sendTextMessage(process.env.PHONE_NUMBER || '', 'hello world')
    const notification = await api.notifications.receiveNotification()
    const response = await api.notifications.deleteNotification(notification.receipt)
    console.log(response)
})();