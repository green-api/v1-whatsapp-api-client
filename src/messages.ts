import Api from './api';
import { assertNotNull, assertPhone } from './Validations';
import {V1} from './v1-types'

export class Messages {

    private readonly url = 'messages' 

    constructor(private readonly api : Api) {}

    /**
     * Send text message to private chat
     * @param phoneNumber phone number, for example '79001234567'
     * @param text // text message to send 
     */
    async sendTextMessage(phoneNumber: string, text : string) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(text, 'parameter text must not be empty')
        return this.api.post(this.url, {
            to: phoneNumber,
            type: "text",    
            text: {
                body: text
            }    
        })
    }
    
    /**
     * Send text message to group chat 
     * @param chatId Groupd id in format like "00000000000-XXXXXXXXXX". For example : "79001234567-1581234048"
     * @param text // text message to send 
     */
    async sendTextMessageToGroup(chatId: string, text : string) : Promise<V1.MessageResponse> {
        assertNotNull(chatId, 'parameter chatId must not be empty')
        assertNotNull(text, 'parameter text must not be empty')
        return this.api.post(this.url, {
            recipient_type: "group",
            to: chatId,
            type:"text",    
            text: {
                body: text
            }    
        })
    }

    /**
     * Send image. Before image have to be uploaded to server using method media.uploadMedia() 
     * @param phoneNumber phone number, for example '79001234567'
     * @param mediaId id obtained from uploading image via method media.uploadMedia() 
     * @param caption title under image in WhatsApp
     * @param recipient_type chat type. Can be individual or group
     */
    async sendImageById(phoneNumber: string, mediaId : string, caption? : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(mediaId, 'parameter mediaId must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "image",
            image: {
                id: mediaId,
                caption: caption
            }
        })
    }

    /**
     * Send image by any url accessible from public zone of Internet
     * @param phoneNumber phone number, for example '79001234567'
     * @param link url
     * @param caption title under image in WhatsApp
     * @param recipient_type chat type. Can be individual or group
     */
    async sendImageByLink(phoneNumber: string, link : string, caption? : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(link, 'parameter link must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "image",
            image: {
                link: link,
                caption: caption
            }
        })
    }

    /**
     * Send video. Before video have to be uploaded to server using method media.uploadMedia() 
     * @param phoneNumber phone number, for example '79001234567'
     * @param mediaId id obtained from uploading video via method media.uploadMedia() 
     * @param recipient_type chat type. Can be individual or group
     */
    async sendVideoById(phoneNumber: string, mediaId : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(mediaId, 'parameter mediaId must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "video",
            video: {
                id: mediaId,
            }
        })
    }

    /**
     * Send video by any url accessible from public zone of Internet
     * @param phoneNumber phone number, for example '79001234567'
     * @param link url
     * @param caption title under video in WhatsApp
     * @param recipient_type chat type. Can be individual or group
     */
    async sendVideoByLink(phoneNumber: string, link : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(link, 'parameter link must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "video",
            video: {
                link: link,
            }
        })
    }

    /**
     * Send audio. Before audio have to be uploaded to server using method media.uploadMedia() 
     * @param phoneNumber phone number, for example '79001234567'
     * @param mediaId id obtained from uploading audio via method media.uploadMedia() 
     * @param recipient_type chat type. Can be individual or group
     */
    async sendAudioById(phoneNumber: string, mediaId : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(mediaId, 'parameter mediaId must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "audio",
            audio: {
                id: mediaId,
            }
        })
    }

    /**
     * Send audio by any url accessible from public zone of Internet
     * @param phoneNumber phone number, for example '79001234567'
     * @param link url
     * @param caption title under audio in WhatsApp
     * @param recipient_type chat type. Can be individual or group
     */
    async sendAudioByLink(phoneNumber: string, link : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(link, 'parameter link must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "audio",
            audio: {
                link: link,
            }
        })
    }

    /**
     * Send document. Before document have to be uploaded to server using method media.uploadMedia() 
     * @param phoneNumber phone number, for example '79001234567'
     * @param mediaId id obtained from uploading document via method media.uploadMedia() 
     * @param recipient_type chat type. Can be individual or group
     */
    async sendDocumentById(phoneNumber: string, mediaId : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(mediaId, 'parameter mediaId must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "document",
            document: {
                id: mediaId,
            }
        })
    }

    /**
     * Send document by any url accessible from public zone of Internet
     * @param phoneNumber phone number, for example '79001234567'
     * @param link url
     * @param caption title under document in WhatsApp
     * @param recipient_type chat type. Can be individual or group
     */
    async sendDocumentByLink(phoneNumber: string, link : string, recipient_type : V1.RecipientTypes = V1.RecipientTypes.Individual) : Promise<V1.MessageResponse> {
        assertPhone(phoneNumber)
        assertNotNull(link, 'parameter link must not be empty')
        return this.api.post(this.url, {
            recipient_type: recipient_type,
            to: phoneNumber,
            type: "document",
            document: {
                link: link,
            }
        })
    }
}