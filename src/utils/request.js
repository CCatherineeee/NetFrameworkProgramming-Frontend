import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// axios.defaults.headers['Access-Control-Allow-Credentials'] = true;
// 创建axios实例 axios.create([config])
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    // baseURL:
    //     process.env.NODE_ENV === "production" //正式生产环境，程序最终发布后所需要的参数配置
    //         ? process.env.VUE_APP_BASE_URI
    //         : "http://localhost:5000",
    // 超时
    timeout: 30000,
    async: true,
    crossDomain: true,//设置cross跨域
    withCredentials: true//设置cross跨域 并设置访问权限 允许跨域携带cookie信息
});
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//service.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// request拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // let pathname = location.pathname;
    // if(localStorage.getItem('token')){
    //     if(pathname !== '/' &&  pathname !== '/login'){
    //         config.headers.common['token'] = localStorage.getItem('token');
    //     }
    // }
    // config.headers['Access-Control-Allow-Headers'] = "*"
    return config;
}, error => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
});
// 响应拦截器
axios.interceptors.response.use(response => {
    let { data } = response;
    return data
},error => {
    if (error.response) {
        switch (error.response.status) {
            // 返回401，清除token信息并跳转到登录页面
            case 401:
                localStorage.removeItem('token');
                router.replace({
                    path: '/login'
                    //登录成功后跳入浏览的当前页面
                    // query: {redirect: router.currentRoute.fullPath}
                })
        }
        // 返回接口返回的错误信息
        return Promise.reject(error.response.data);
    }
});
export default service;
