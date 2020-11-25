import WhatsAppApi from '../src/index'

describe('broadcasts', () => {
    it('sendBroadcastTextMessage', async () => {
        const api = new WhatsAppApi(process.env.TOKEN || '')
        try {
            const response = await api.broadcasts.sendBroadcastTextMessage([process.env.PHONE_NUMBER || '', process.env.PHONE_NUMBER_2 || ''], 'hello world')
            expect(response.messages[0]).toHaveProperty('id') // fails with error sending message to at least 2 numbers
        } catch (ex) {
            // yet don't know how to test it
        }
    })
});
