import axios, { Axios, AxiosHeaderValue, AxiosInstance, AxiosResponse } from "axios";

export default class Http {
    private baseUrl: string
    private instance: AxiosInstance
    private token : AxiosHeaderValue
    constructor() {
        this.baseUrl = 'https://radintechco.ir/echolab/public/api/'
        this.instance = axios.create()
        this.token = '2|PCN9OTbqddSOktwjF8UgWUvvmUSPP1a5Akfx9gSF'
        headers: {'X-Custom-Header': 'foobar'}
    }

    public post(endPoint: string, params: object): Promise<AxiosResponse> {
        return this.instance.post(`${this.baseUrl}${endPoint}`, params,this.token)
    }

    public get(endPoint: string): Promise<AxiosResponse> {
        return this.instance.get(`${this.baseUrl}${endPoint}`)
    }

}