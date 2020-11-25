import Api, { Options } from './api';
import { Messages } from './messages'
import { Media } from './media';
import { Broadcasts } from './broadcasts';
import { Notifications } from './notifications';

export default class WhatsAppApi {
    public readonly messages: Messages
    public readonly media: Media
    public readonly broadcasts: Broadcasts
    public readonly notifications: Notifications

    constructor(token: string, options?: Options) {
        const api = new Api(token, options)
        this.messages = new Messages(api)
        this.media = new Media(api)
        this.broadcasts = new Broadcasts(api)
        this.notifications = new Notifications(api)
    }
}

module.exports = Object.assign(WhatsAppApi, {
    default: WhatsAppApi,
})