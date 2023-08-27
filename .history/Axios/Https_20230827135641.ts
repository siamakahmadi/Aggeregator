import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class Http {
    private baseUrl: string
    private instance: AxiosInstance
    private authToken: string;
    constructor() {
        this.baseUrl = 'https://radintechco.ir/echolab/public/api/'
        this.instance = axios.create()
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.authToken}`;
        // this.instance.defaults.headers.common['Authorization'] = '2|PCN9OTbqddSOktwjF8UgWUvvmUSPP1a5Akfx9gSF';
    }

    public post(endPoint: string, params: object): Promise<AxiosResponse> {
        return this.instance.post(`${this.baseUrl}${endPoint}`, params)
    }

    public get(endPoint: string): Promise<AxiosResponse> {
        return this.instance.get(`${this.baseUrl}${endPoint}`)
    }

}
