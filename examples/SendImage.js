import WhatsAppApi from '@green-api/v1-whatsapp-api-client'
import fs from 'fs'
import path from 'path'

(async () => {
    const api = new WhatsAppApi(process.env.TOKEN || '')
    const testFile = 'resources/guitar.jpg'
    const buffer = fs.readFileSync(testFile)
    const extension = path.extname(testFile)
    const fileName = path.basename(testFile)

    const mediaId = await api.media.uploadMedia(buffer, extension)
    const response = await api.messages.sendImageById(process.env.PHONE_NUMBER || '', mediaId, fileName)
    
    console.log(response.messages[0].id)
})();