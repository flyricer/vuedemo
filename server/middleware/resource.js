module.exports = options => {
    return async (ctx, next) => {
      const modelName = require('inflection').classify(ctx.params.resource)
      ctx.Model = require(`../models/${modelName}`)
      await next()
    }
}