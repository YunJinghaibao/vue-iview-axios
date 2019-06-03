import store from '../store';
import axios from 'axios';
import qs from 'qs';
import baseUrl from './config';
const httpService = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    withCredentials: true,
    crossDomain: true,
    // msg: '123456',  // 可带自定义配置
});
httpService.interceptors.request.use(
    config => {
        // 可配置
        store.commit('httpStatus', 0);
        console.log(config);
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)
httpService.interceptors.response.use(
    response => {
        store.commit('httpStatus', 1);
        console.log(response);
        return response
    },
    error => {
        console.log(error.toString());
        if(error.toString() === 'Error: Request failed with status code 403'){
            console.log(111);
        }
        store.commit('httpStatus', 2);
        return Promise.reject(error)
    }
)
const get = (url, params = {params: {}}) => {
    return httpService.get(url, params);
}
const post = (url, data, json=false) => {
    return httpService({
        method: "POST",
        url: url,
        data: json ? qs.stringify(data) : data,
        headers: {
            "Content-Type": json ? "application/x-www-form-urlencoded;charset=utf-8" : "application/json;charset=utf-8",
        }
    })
}
export default {
    get,
    post,
};
