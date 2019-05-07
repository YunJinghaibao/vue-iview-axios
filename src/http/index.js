import axios from 'axios'
import qs from 'qs'
import baseUrl from './config'

const http = axios.create({
    // baseURL: "http://localhost:1234",
    baseURL: baseUrl,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded;charset=utf-8", //form表单提交数据
        // "Content-Type": "application/json;charset=utf-8",//json格式提交数据
    },
    timeout: 3000,
    msg: '123456',
})

http.interceptors.request.use(
    config => {
        
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    response => {

        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default http;