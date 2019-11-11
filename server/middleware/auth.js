module.exports = options => {
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')
  
    return async (ctx, next) => {
      const token = String(ctx.headers.authorization || '').split(' ').pop()
      ctx.assert(token, 401, '请先登录')
    //   const { id } = jwt.verify(token, req.app.get('secret'))
      const { id } = jwt.verify(token, "i2u34y12oi3u4y8")
      ctx.assert(id, 401, '请先登录')
      ctx.user = await AdminUser.findById(id)
      ctx.assert(ctx.user, 401, '请先登录')
      await next()
    }
}