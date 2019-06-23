const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body');
app.use(koaBody())
const cors = require('koa-cors');
app.use(cors())
// const static = require('koa-static')
// app.use(static(__dirname + '/uploads'))
const static = require('koa-static-router')
require('./plugins/db')(app)
const routes = require('./routes/admin')
app.use(static({ dir: './uploads', router: '/uploads/' }))


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


// app.use(handler)
app.use(routes.routes()).use(routes.allowedMethods());
app.listen(3000, (ctx, next) => {
    console.log(__dirname + '/uploads')
    console.log(path.resolve(__dirname,'./uploads'))
})