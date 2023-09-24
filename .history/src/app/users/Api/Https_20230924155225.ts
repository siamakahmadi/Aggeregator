import axios, {
    AxiosInstance
    , AxiosRequestConfig, AxiosResponse
} from "axios";


export default class Http {
    private baseUrl: string
    private instance: AxiosInstance
    public authToken: string;
    constructor() {
        this.baseUrl = 'https://radintechco.ir/echolab/public/api/'
        this.instance = axios.create()
        this.authToken = '151|EaHCZuWFrK2g0u3bUwVndsEfTnZgBCkif2UzaIcY';
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.authToken}`;
    }

    public async post<T, B, R = AxiosResponse<T>>(endPoint: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.instance.post(`${this.baseUrl}${endPoint}`, data, config)
    }


    public get(endPoint: string): Promise<AxiosResponse> {
        return this.instance.get(`${this.baseUrl}${endPoint}`)
    }

}