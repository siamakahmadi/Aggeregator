

import axios, { AxiosInstance, AxiosResponse } from "axios";
export default class Http {
    private baseUrl: string
    private instance: AxiosInstance
    constructor() {
        this.baseUrl = 'https://radintechco.ir/echolab/public/api/'
        this.instance = axios.create()
    }

    public post(endPoint:string,params:object):P<>{

    }


}