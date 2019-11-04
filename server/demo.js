const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const app = new Koa()

// const handler = async (ctx, next) => {
//     try {
//       await next();
//     } catch (err) {
//       ctx.response.status = err.statusCode || err.status || 500;
//       ctx.response.body = {
//         message: err.message
//       };
//     }
// };

const main = async (ctx, next) => {
  ctx.response.body = 'jack'
  console.log(ctx.response.type)
  console.log(ctx.request.originalUrl)
};

// app.use(handler)
app.use(main);
  
// app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)