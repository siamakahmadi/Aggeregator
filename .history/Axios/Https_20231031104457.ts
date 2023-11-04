import axios, {
    AxiosInstance
    , AxiosRequestConfig, AxiosResponse
} from "axios";

export default class Http {
    private baseUrl: string
    private instance: AxiosInstance
    public authToken: string;
    constructor(authToken:string) {
        this.instance = axios.create()
        this.baseUrl = 'https://radintechco.ir/echolab/public/api/'
        this.authToken = 204|Ozwl7gMSErf5CZMu9zt8q4kue4AjRmxvFwIcct7n33d7ce33
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${this.authToken}`;
    }

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



