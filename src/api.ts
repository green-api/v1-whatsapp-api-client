
import axios, { AxiosRequestConfig } from 'axios'
import { assertApiToken } from './Validations';

export interface Options {
    apiRoot: string,
    mediaRoot: string,
} 

const DEFAULT_OPTIONS = {
    apiRoot: 'https://api.green-api.com/v1',
    mediaRoot: 'https://media.green-api.com/v1'
}

export default class Api {

    private readonly options: Options
    private DEFAULT_AXIOS_CFG : AxiosRequestConfig =  {
        headers: {
            'Authorization': 'Bearer ' + this.token
        }
    }
    
    constructor(readonly token : string,  options?: Partial<Options>) {
        this.options = {
            ...DEFAULT_OPTIONS,
            ...options,
        }
        assertApiToken(token)
    }

    async get(url: string) : Promise<any> {
        const response = await axios.get(`${this.options.apiRoot}/${url}`, this.DEFAULT_AXIOS_CFG)
        try {
            return response.data
        } catch (ex) {
            this.processError(ex)
        }
    } 

    async delete(url: string) : Promise<any> {
        const response = await axios.delete(`${this.options.apiRoot}/${url}`, this.DEFAULT_AXIOS_CFG)
        try {
            return response.data
        } catch (ex) {
            this.processError(ex)
        }
    } 

    async post(url: string, data : any) : Promise<any> {
        try {
            const response = await axios.post(`${this.options.apiRoot}/${url}`, data, this.DEFAULT_AXIOS_CFG)
            return response.data
        } catch(ex) {
            this.processError(ex)
        }
    }

    async postMedia(url: string, data : Buffer, ext: string) : Promise<any> {
        try {
            const config : AxiosRequestConfig = {
                method: 'post',
                url: `${this.options.mediaRoot}/${url}`,
                headers: { 
                    'X-Gr-File-Extension': ext, 
                    'Authorization': this.DEFAULT_AXIOS_CFG.headers['Authorization'], 
                    'Content-Type': 'text/plain'
                },
                data : data
            };
            const response = await axios(config)
            return response.data;
        } catch (ex) {
            this.processError(ex)
        }
    }

    private processError(ex: any) {
        if (ex.isAxiosError && ex.response && ex.response.data) {
            throw new Error(JSON.stringify(ex.response.data))
        } else {
            throw ex
        }
    }
}