
export namespace V1 {
    export interface MessageResponse {
        messages: [
            {
                id: string
            }
        ],
        meta: Meta
    }
    export interface MediaResponse {
        media: [
            {
                id: string
            }
        ],
        meta: Meta
    }
    export enum RecipientTypes {
        Individual = 'individual',
        Group = 'group'
    }

    export interface NotificationResponse {
        receipt: number,
        notifications: InboundMessage[]
    }

}

interface Meta {
    "api_status": "stable",
    "version": "2.0.1"
}

interface NotificationEntitiy {
    type: string
    account: Account,
}

interface InboundMessage extends NotificationEntitiy {
    type: "inbound_message",
    messages: MessageEntity[],
    contacts: [
        {
            profile: {
                name: string
            },
            wa_id: string
        }
    ]
}

interface Account {
    id: string,
    wa_id: string
}

interface MessageEntity {
    from: string
    id: string
    timestamp: string
    type: "text | image | video | voice | document | contacts | location",
    text?: Text,
    image?: Image,
    video?: Video,
    voice?: Voice,
    document?: Document,
    contacts?: Contacts,
    location?: Location,
}

interface Text extends MessageEntity {
    body: string
}

interface Image extends MessageEntity {
    id: string
    mime_type: string
    file_extension: string,
    caption: string
}

interface Video extends MessageEntity {
    id: string
    mime_type: string,
    file_extension: string,
    caption: string
}

interface Voice extends MessageEntity {
    id: string,
    mime_type: string,
    file_extension: string
}

interface Document extends MessageEntity {
    id: string,
    mime_type: string,
    file_extension: string,
    filename: string
}

interface Contacts extends MessageEntity {
    vcard: string
}

interface Location extends MessageEntity {
    link: string
}
