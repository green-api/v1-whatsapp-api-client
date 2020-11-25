import Api from './api';
import {V1} from './v1-types'

export class Notifications {

    private readonly url = 'notifications' 

    constructor(private readonly api : Api) {}

    /**
     * Notifications include data about incoming messages, statues, sent messges. 
     * After receving notification it have to be deleted with the method deleteNotification() in order to receive the next notification
     * Inner implementation uses long polling. Every method invokes loop that waits 20 seconds for the next message. 
     * If no messages arrive then the loop ends with the empty response.
     */
    async receiveNotification() : Promise<V1.NotificationResponse> {
        return this.api.get(this.url)
    }

    /**
     * Delete notification for remote server using receiptId
     * @param receiptId message id get coming from notification
     */
    async deleteNotification(receiptId: number) : Promise<any> {
        return this.api.delete(`${this.url}/${receiptId}`)
    }
}