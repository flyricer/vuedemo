import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:3000/admin",
    timeout: 5000
})

// http.interceptors.request.use(
//     config => {
//         if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//             config.headers.Authorization = `token ${store.state.token}`;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// // http response 拦截器
// http.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error && error.response) {
//             switch (error.response.status) {
//                 case 400: error.message = '请求错误(400)'; break;
//                 case 401:// 返回 401 清除token信息并跳转到登录页面
//                     this.$store.commit('delToken');
//                     router.replace({
//                         path: 'login',
//                         query: { redirect: router.currentRoute.fullPath }
//                     })
//                 case 403: error.message = '拒绝访问(403)'; break;
//                 case 404: error.message = '请求出错(404)'; break;
//                 case 408: error.message = '请求超时(408)'; break;
//                 case 500: error.message = '服务器错误(500)'; break;
//                 case 501: error.message = '服务未实现(501)'; break;
//                 case 502: error.message = '网络错误(502)'; break;
//                 case 503: error.message = '服务不可用(503)'; break;
//                 case 504: error.message = '网络超时(504)'; break;
//                 case 505: error.message = 'HTTP版本不受支持(505)'; break;
//                 default: error.message = `连接出错(${error.response.status})!`;
//             }
//         }
//         return Promise.reject(error.response.data)   // 返回接口返回的错误信息
//     });

export default http