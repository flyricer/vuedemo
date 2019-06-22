const Router = require('koa-router')
const router = new Router({
    prefix: '/admin'
})
const Category = require('../../models/category')

router.post('/categories', async (ctx, next) => {
    const data = ctx.request.body
    const product = await Category.create(data)
    ctx.body = product
})

router.delete('/categories/:id', async (ctx, next) => {
    await Category.findByIdAndDelete(ctx.params.id, ctx.request.body)
    ctx.body = {
        success: true
    }
})

router.put('/categories/:id', async (ctx, next) => {
    const data = await Category.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    ctx.body = data
})

router.get('/categories', async (ctx, next) => {
    const items = await Category.find().populate('parent').limit(10)
    ctx.body = items
})

router.get('/categories/:id', async (ctx, next) => {
    const plvalue = await Category.findById(ctx.params.id)
    ctx.body = plvalue
})



module.exports = router