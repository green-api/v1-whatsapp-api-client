import WhatsAppApi from '../src/index'

describe('notifications', () => {
    it('ReceiveDeleteNotification', async () => {
        //jest.setTimeout(30000)
        const api = new WhatsAppApi(process.env.TOKEN || '')
        await api.messages.sendTextMessage(process.env.PHONE_NUMBER || '', 'hello world')
        const notification = await api.notifications.receiveNotification()
        const response = await api.notifications.deleteNotification(notification.receipt)
        expect(response).toBeDefined()
    })
});
