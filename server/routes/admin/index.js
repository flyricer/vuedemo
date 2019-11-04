const Router = require('koa-router')
const multer = require('koa-multer')

const router = new Router({
    prefix: '/admin/:resourse'
})

router.post('/', async (ctx, next) => {
    const modelName = require('inflection').classify(ctx.params.resourse)
    const Model = require(`../../models/${modelName}`)
    const data = ctx.request.body
    const product = await Model.create(data)
    ctx.body = product
})

router.delete('/:id', async (ctx, next) => {
    const modelName = require('inflection').classify(ctx.params.resourse)
    const Model = require(`../../models/${modelName}`)
    await Model.findByIdAndDelete(ctx.params.id, ctx.request.body)
    ctx.body = {
        success: true
    }
})

router.put('/:id', async (ctx, next) => {
    const modelName = require('inflection').classify(ctx.params.resourse)
    const Model = require(`../../models/${modelName}`)
    const data = await Model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    ctx.body = data
})

router.get('/', async (ctx, next) => {
    const modelName = require('inflection').classify(ctx.params.resourse)
    const Model = require(`../../models/${modelName}`)
    const items = await Model.find().populate('parent').limit(10)
    ctx.body = items
})

router.get('/:id', async (ctx, next) => {
    const modelName = require('inflection').classify(ctx.params.resourse)
    const Model = require(`../../models/${modelName}`)
    const plvalue = await Model.findById(ctx.params.id)
    ctx.body = plvalue
})


// router.post('/items', async (ctx, next) => {
//     const data = ctx.request.body
//     const product = await Item.create(data)
//     ctx.body = product
// })

// router.delete('/items/:id', async (ctx, next) => {
//     await Item.findByIdAndDelete(ctx.params.id, ctx.request.body)
//     ctx.body = {
//         success: true
//     }
// })

// router.put('/items/:id', async (ctx, next) => {
//     const data = await Item.findByIdAndUpdate(ctx.params.id, ctx.request.body)
//     ctx.body = data
// })

// router.get('/items', async (ctx, next) => {
//     const items = await Item.find().limit(10)
//     ctx.body = items
// })

// router.get('/items/:id', async (ctx, next) => {
//     const plvalue = await Item.findById(ctx.params.id)
//     ctx.body = plvalue
// })

// const upload = multer({ dest: __dirname + '/../../uploads' })
// router.post('/upload', upload.single('file'), async (ctx, next) => {
//     // console.log(ctx.req.file);
//     // ctx.body = ctx.request.body;

//     const file = ctx.req.file
//     file.url = `http://localhost:3000/uploads/${file.filename}`
//     ctx.body = file
//     // ctx.body = ctx.request.body
// })



module.exports = router