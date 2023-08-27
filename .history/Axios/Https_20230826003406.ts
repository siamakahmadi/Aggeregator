import axios, { Axios, AxiosHeaderValue, AxiosInstance, AxiosResponse } from "axios";

export default class Http {
    private baseUrl: string
    private instance: AxiosInstance
    private header : AxiosInstance
    constructor() {
        this.baseUrl = 'https://radintechco.ir/echolab/public/api/'
        this.instance = axios.create()
        this.instance.
        
    }

    public post(endPoint: string, params: object): Promise<AxiosResponse> {
        return this.instance.post(`${this.baseUrl}${endPoint}`, params,)
    }

    public get(endPoint: string): Promise<AxiosResponse> {
        return this.instance.get(`${this.baseUrl}${endPoint}`)
    }

}


// headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },



// import axios, { AxiosError, AxiosResponse } from 'axios';
// const token = '2|PCN9OTbqddSOktwjF8UgWUvvmUSPP1a5Akfx9gSF';

// interface Todo {
//   id: string;
//   title: string;
// }

// interface User {
//   id: string;
//   name: string;
// }

// axios.defaults.baseURL = 'https://radintechco.ir/echolab/public/api/';

// axios.interceptors.request.use((config) => {
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// axios.interceptors.response.use(
//   (res) => res,
//   (error: AxiosError) => {
//     const { data, status, config } = error.response!;
//     switch (status) {
//       case 400:
//         console.error(data);
//         break;

//       case 401:
//         console.error('unauthorised');
//         break;

//       case 404:
//         console.error('/not-found');
//         break;

//       case 500:
//         console.error('/server-error');
//         break;
//     }
//     return Promise.reject(error);
//   }
// );

// const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// const request = {
//   get: <T>(url: string) => axios.get<T>(url).then(responseBody),
//   post: <T>(url: string, body: {}) =>
//     axios.post<T>(url, body).then(responseBody),
// };

// const todos = {
//   list: () => request.get<Todo[]>('/todos'),
//   details: (id: string) => request.get<Todo>(`/todos/${id}`),
//   create: (data: Todo) => request.post<void>('/todos', data),
// };

// const users = {
//   list: () => request.get<User[]>('/users'),
//   details: (id: string) => request.get<User>(`/users/${id}`),
//   create: (data: User) => request.post<User>('/users', data),
// };

// const api = {
//   todos,
//   users,
// };

// export default api;
