import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "universal-cookie";

interface AuthCookie {
  isLoggin: boolean;
  userToken: string;
  userEmail: string;
  userId: string;
}

export default class Http {
  private baseUrl: string;
  private instance: AxiosInstance;
  public authToken: string;
  private cookies: Cookies;

  constructor() {
    this.instance = axios.create();
    this.baseUrl = "https://radintechco.ir/echolab/public/api/";
    this.cookies = new Cookies();
    const token = this.getTokenFromCookie();
    this.authToken =
      token || "273|TVU7ikWMYLtWQ4ib35HF8QwqrW6xIXsW2m576RGPd407daf6";

    this.setAuthToken(this.authToken);
  }

  private getTokenFromCookie(): string | undefined {
    const authCookie = this.cookies.get("userLogin");
    if (authCookie && authCookie.isLoggin) {
      return authCookie.userToken;
    }
    return undefined;
  }

  private setAuthToken(token: string): void {
    this.authToken = token;
    this.instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.authToken}`;
  }

  public async post<T, B, R = AxiosResponse<T>>(
    endPoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.post(`${this.baseUrl}${endPoint}`, data, config);
  }

  public get(endPoint: string): Promise<AxiosResponse> {
    return this.instance.get(`${this.baseUrl}${endPoint}`);
  }

  public updateAuthToken(newToken: string): void {
    const authCookie = this.cookies.get("userLogin");
    if (authCookie) {
      authCookie.userToken = newToken;
      this.cookies.set("userLogin", authCookie, { path: "/" });
      this.setAuthToken(newToken);
    }
  }
}
