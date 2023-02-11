import axios, { AxiosInstance, AxiosResponse } from 'axios'

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response.data, // Just get data from response
      (error) => Promise.reject(error)
    )
  }
}

const http = new Http().instance

export default http
