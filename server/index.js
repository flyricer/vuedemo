const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body');
app.use(koaBody())

// app.use(
//     koaBody({
//         multipart:true, // 支持文件上传
//         formidable:{
//             uploadDir: path.join(__dirname,'/uploads'), // 设置文件上传目录
//             keepExtensions: true,    // 保持文件的后缀
//             maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
//         }
//     })
// );

const cors = require('koa-cors');
app.use(cors())
require('./plugins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)
const static = require('koa-static-router')
app.use(static({ dir: './uploads', router: '/uploads/' }))

app.listen(3000)