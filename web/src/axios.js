import axios from "axios"
import Vue from "vue"
import router from "./router";

const http = axios.create({
    baseURL: "http://localhost:3000/web",
    timeout: 5000
})

// http resquest 拦截器
// http.interceptors.request.use(
//     config => {
//         if (localStorage.token) {
//             config.headers.Authorization = 'Bearer ' + localStorage.token;           
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// http response 拦截器
// http.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         // console.log(error.response)
//         switch (error.response.status) {
//             // case 400: error.message = '请求错误(400)'; break;
//             // case 401:// 返回 401 清除token信息并跳转到登录页面
//             //     // this.$store.commit('delToken');
//             //     router.replace({
//             //         path: '/login',
//             //         query: { redirect: router.currentRoute.fullPath }
//             //     })
//             // case 403: error.message = '拒绝访问(403)'; break;
//             // case 404: error.message = '请求出错(404)'; break;
//             // case 408: error.message = '请求超时(408)'; break;
//             // case 500: error.message = '服务器错误(500)'; break;
//             // case 501: error.message = '服务未实现(501)'; break;
//             // case 502: error.message = '网络错误(502)'; break;
//             // case 503: error.message = '服务不可用(503)'; break;
//             // case 504: error.message = '网络超时(504)'; break;
//             // case 505: error.message = 'HTTP版本不受支持(505)'; break;
//             default: error.message = `连接出错(${error.response.data.message})!`;
//         }
//         Vue.prototype.$message({
//             type: 'error',
//             message: error.message
//         })

//         return Promise.reject(error)
//     }
// );

// export function get(url, params = {}) {
//     params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
//     return http({
//       url: url,
//       method: 'get',
//       headers: {     
//       },
//       params
//     })
//   }
  
  
//   //封装post请求
//   export function post(url, data = {}) { 
//     //默认配置 
//     let sendObject={
//       url: url,
//       method: 'post',
//       headers: {
//         'Content-Type':'application/json;charset=UTF-8'       
//       },
//       data:data
//     };
//     sendObject.data=JSON.stringify(data);
//     return http(sendObject)
//   }
  
//   //封装put方法 (resfulAPI常用)
//   export function put(url,data = {}){
//     return http({
//       url: url,
//       method: 'put',
//       headers: {
//         'Content-Type':'application/json;charset=UTF-8'       
//       },
//       data:JSON.stringify(data)
//     }) 
//   }
//   //删除方法(resfulAPI常用)
//   export function deletes(url){
//     return http({
//       url: url,
//       method: 'delete',
//       headers: {}
//     }) 
//   }

export default http