import Api from './api';
import { assertNotNull } from './Validations';
import {V1} from './v1-types'

export class Media {

    private readonly url = 'media' 

    constructor(private readonly api : Api) {}

    /**
     * Upload binary data (images, documents etc) to the server. After uploading you can send media to WhatsApp using id of the uploaded data 
     * @param data binary data to upload
     * @param fileExtension extension of upladed data that will be assign to media message in WhatsApp.
     */
    async uploadMedia(data: Buffer, fileExtension : string) : Promise<string> {
        assertNotNull(data, 'parameter data must not be empty')
        assertNotNull(fileExtension, 'parameter fileExtension must not be empty')
        if (fileExtension.startsWith('.')) {
            fileExtension = fileExtension.slice(1)
        }
        const response = await this.api.postMedia(this.url, data, fileExtension) as V1.MediaResponse
        return response.media[0].id
    }
}