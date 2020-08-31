import axios from 'axios';
import qs from "qs"

class HttpRequest{
    constructor(options){
        this.defaults = {
            baseUrl: ''
        }
        this.defaults = Object.assign(this.defaults,options);
    }
    interceptors(install){
        install.interceptors.request.use(
            config => {
                return config;
            },
            err => {
                return Promise.reject(err);
            }
        );
        install.interceptors.response.use(
            res => {
                const {data} = res;
                return data;
            },
            err => {
                return Promise.reject(err);
            }
        );
    }
    request(options){
        options = Object.assign(this.defaults,options);
        const instance = axios.create(options);
        this.interceptors(instance);
        return instance
    }
}

const request = new HttpRequest({
    baseURL: '/api',
    withCredentials:true,
    transformRequest:(data)=>{
        return qs.stringify(data)
    }
});

const http = request.request();

//登录
export async function login(params) {
    return await http.post('/user/login',params);
}
//是否登录
export async function isLogin() {
    return await http.post('/user/islogin');
}
//退出登陆
export async function logOut() {
    return await http.post('/user/logout');
}
//获取列表
export async function getWorks({page,row,...params}) {
    return await http.post(`/lecturer/lists?page=${page}&rows=${row}`,params);
}

//详情页
export async function getInfo(params) {
    return await http.post('/lecturer/info',params);
}

//是否点赞
export async function getGood(params) {
    return await http.post('/lecturer/getgood',params);
}

//点赞
export async function setGood(params) {
    return await http.post('/lecturer/good',params);
}

//取消点赞
export async function cancelGood(params) {
    return await http.post('/lecturer/cancelgood',params);
}

//详情页留言列表
export async function getMessageList({page,...params}) {
    return await http.post(`/lecturer/getcomment?page=${page}&rows=10`,params);
}

//评论
export async function addComment(params) {
    return await http.post('/lecturer/addcomment',params);
}
