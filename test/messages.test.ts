import WhatsAppApi from '../src/index'
import fs from 'fs'
import path from 'path'

describe('messages', () => {
    it('sendDocumentById', async () => {
        jest.setTimeout(30000)
        const api = new WhatsAppApi(process.env.TOKEN || '')
        const testFile = 'resources/document.pdf'
        const buffer = fs.readFileSync(testFile)
        const extension = path.extname(testFile)

        const mediaId = await api.media.uploadMedia(buffer, extension)
        const response = await api.messages.sendDocumentById(process.env.PHONE_NUMBER || '', mediaId)
        expect(response.messages[0]).toHaveProperty('id')

    }),

    it('sendImageById', async () => {

        const api = new WhatsAppApi(process.env.TOKEN || '')
        const testFile = 'resources/guitar.jpg'
        const buffer = fs.readFileSync(testFile)
        const extension = path.extname(testFile)
        const fileName = path.basename(testFile)

        const mediaId = await api.media.uploadMedia(buffer, extension)
        const response = await api.messages.sendImageById(process.env.PHONE_NUMBER || '', mediaId, fileName)
        expect(response.messages[0]).toHaveProperty('id')

    }),

    it('sendImageByLink', async () => {
        const api = new WhatsAppApi(process.env.TOKEN || '')
        const response = await api.messages.sendImageByLink(process.env.PHONE_NUMBER || '', 'https://green-api.com/integrations/img/nodejs.png', 'nodejs logo')
        expect(response.messages[0]).toHaveProperty('id')
    }),
    
    it('sendTextMessage', async () => {
        const api = new WhatsAppApi(process.env.TOKEN || '')

        const response  = await api.messages.sendTextMessage(process.env.PHONE_NUMBER || '', 'hello world')
        expect(response.messages[0]).toHaveProperty('id')

    })
});
