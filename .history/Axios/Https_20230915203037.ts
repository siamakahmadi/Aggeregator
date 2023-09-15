import axios, {
    AxiosInstance
    , AxiosRequestConfig, AxiosResponse
} from "axios";

export default class Http {
    private baseUrl: string
    private instance: AxiosInstance
    private authToken: string;
    constructor() {
        this.instance = axios.create()
        this.baseUrl = 'https://radintechco.ir/echolab/public/api/'
        // this.authToken = '2|PCN9OTbqddSOktwjF8UgWUvvmUSPP1a5Akfx9gSF'
        this.authToken 
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.authToken}`;
    }

    // public post(endPoint: string, params: object): Promise<AxiosResponse> {
    //     return this.instance.post(`${this.baseUrl}${endPoint}`, params)
    // }

    public async get(endPoint: string): Promise<AxiosResponse> {
        return this.instance.get(`${this.baseUrl}${endPoint}`)
    }

    public async post<T, B, R = AxiosResponse<T>>(endPoint: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.post(`${this.baseUrl}${endPoint}`, data, config)
    }

    public async delete<T, B, R = AxiosResponse<T>>(endPoint: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.delete(`${this.baseUrl}${endPoint}`)
    }

}
