import Api from './api';
import { assertNotNull, assertObjectNotEmpty } from './Validations';
import {V1} from './v1-types'

export class Broadcasts {

    private readonly url = 'broadcast' 

    constructor(private readonly api : Api) {}

    /**
     * Send broadcast message to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param text text message to send 
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastTextMessage(phoneNumbers: Array<string>, text : string, 
        regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(text, 'parameter text must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type: "text",
            text: {
                body: text
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast image to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param mediaId id obtained from uploading image via method media.uploadMedia() 
     * @param caption title under image in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastImageById(phoneNumbers: Array<string>, mediaId : string, caption? : string,
        regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(mediaId, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "image",
            image: {
                id: mediaId,
                caption: caption
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast image to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param link url
     * @param caption title under image in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastImageByLink(phoneNumbers: Array<string>, link : string, caption? : string,
        regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(link, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "image",
            image: {
                link: link,
                caption: caption
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast video to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param mediaId id obtained from uploading video via method media.uploadMedia() 
     * @param caption title under video in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastVideoById(phoneNumbers: Array<string>, mediaId : string,
        regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(mediaId, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "video",
            video: {
                id: mediaId
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast video to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param link url
     * @param caption title under video in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastVideoByLink(phoneNumbers: Array<string>, link : string,
         regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(link, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "video",
            video: {
                link: link
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast document to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param mediaId id obtained from uploading document via method media.uploadMedia() 
     * @param caption title under document in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastDocumentById(phoneNumbers: Array<string>, mediaId : string,
        regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(mediaId, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "document",
            document: {
                id: mediaId
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast document to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param link url
     * @param caption title under document in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastDocumentByLink(phoneNumbers: Array<string>, link : string,
         regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(link, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "document",
            document: {
                link: link
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast audio to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param mediaId id obtained from uploading audio via method media.uploadMedia() 
     * @param caption title under audio in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastAudioById(phoneNumbers: Array<string>, mediaId : string,
        regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(mediaId, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "audio",
            audio: {
                id: mediaId
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    /**
     * Send broadcast audio to several phone numbers. There must be at least 2 receivers
     * @param phoneNumbers array of phones, for example ['79001234567', '79001234568']
     * @param link url
     * @param caption title under audio in WhatsApp
     * @param regPeriod filter by registration period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param activePeriod filter for activity period for phones. Something like {"from": "2020-01-01 00:00:00", "to": "2020-01-31 23:59:59"}
     * @param startAt date when to start broadcasting. If empty to begin immediately. Format like "2020-01-01 00:00:00" 
     */
    async sendBroadcastAudioByLink(phoneNumbers: Array<string>, link : string,
         regPeriod?: PeriodFilter, activePeriod?: PeriodFilter, startAt? : string) : Promise<V1.MessageResponse> {

        assertObjectNotEmpty(phoneNumbers, 'parameter phoneNumbers must not be empty')
        assertNotNull(link, 'parameter mediaId must not be empty')

        const body : any = {
            name: "Broadcast from Green-API",
            to: this.toWaIds(phoneNumbers),
            type:  "audio",
            audio: {
                link: link
            }
        }

        if (regPeriod) {
            body.period = regPeriod
        }

        if (activePeriod) {
            body.active = activePeriod
        }

        
        if (startAt) {
            body.startAt = startAt
        }

        return this.api.post(this.url, body)
    }

    private toWaIds(phoneNumbers: Array<string>) {
        if (phoneNumbers.length < 2) {
            throw new Error('There are not enough phones to send broadcast. Must be at least 2')
        }
        return phoneNumbers.map(phone => { return {wa_id: phone}})
    }
}

export interface PeriodFilter {
    from: string,
    to: string
}