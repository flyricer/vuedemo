const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const app = new Koa()

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'html';
    ctx.response.body = {
      message: err.message
    };
    // ctx.response.body = '<p>Something wrong, please contact administrators.</p>';
    ctx.app.emit('error', err, ctx);
  }
};
 
const main = ctx => {
  // ctx.throw(423);
  const user = undefined
  ctx.assert(user, 423, 'User not found. Please login!');
};
 
app.on('error', (err, ctx) => {
  console.log('logging error ', err, ctx);
});

app.use(handler)
app.use(main);
  
// app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)