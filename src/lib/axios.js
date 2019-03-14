import axios from 'axios'
import qs from 'qs'
import { baseURL } from '@/config'

class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            headers: {
                // 头部信息
            }
        }
        return config
    }
    // 拦截器
    interceptors(instance, url) {
        instance.interceptors.request.use(
            config => {
                // 针对参数进行处理
                config.url = config.baseUrl + url
                // config.data = qs.stringify(config.data)
                config.data = qs.stringify({
                    ...window.sendData,
                    ...config.data
                })
                return config
            },
            error => {
                return Promise.reject(error)
            }
        )
        instance.interceptors.response.use(
            res => {
                const {
                    status,
                    data: { data, code, msg }
                } = res
                if (status === 200 && code === 0) {
                    return data
                } else {
                    this.$dialog.alert({ message: msg })
                }
            },
            error => {
                return Promise.reject(error)
            }
        )
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

const ajax = new HttpRequest()

export const POST = (url, data) => ajax.request({ url, method: 'POST', data })
export const GET = (url, data) => ajax.request({ url, method: 'GET', data })
