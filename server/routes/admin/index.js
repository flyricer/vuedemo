module.exports = app => {
    const Router = require('koa-router')
    const multer = require('@koa/multer')
    const path = require('path')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')

    const handler = async (ctx, next) => {
        try {
          await next();
        } catch (err) {
          ctx.response.status = err.statusCode || err.status || 500;
          ctx.response.body = {
            message: err.message
          };
        // 服务器端日志输出，如果错误被try...catch捕获，就不会触发error事件。这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效
        // ctx.app.emit('error', err, ctx); 
        }
    };
    
    // app.on('error', (err, ctx) => {
    //     console.log('logging error ', err, ctx);
    // });
    

    const authMiddleware = require('../../middleware/auth')
    const resourceMiddleware = require('../../middleware/resource')

    const router = new Router({
        prefix: '/admin'
    })

    router.use('/api/:resource', authMiddleware(), resourceMiddleware())



    // 创建资源
    router.post('/api/:resource', async (ctx, next) => {
        const data = ctx.request.body
        const product = await ctx.Model.create(data)
        ctx.body = product
    })

    // 删除资源
    router.delete('/api/:resource/:id', async (ctx, next) => {
        await ctx.Model.findByIdAndDelete(ctx.params.id, ctx.request.body)
        ctx.body = {
            success: true
        }
    })

    // 更新资源
    router.put('/api/:resource/:id', async (ctx, next) => {
        const data = await ctx.Model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
        ctx.body = data
    })

    // 获取数据
    router.get('/api/:resource', async (ctx, next) => {
        const items = await ctx.Model.find().populate('parent').limit(100)
        ctx.body = items
    })

    // 获取带参数据
    router.get('/api/:resource/:id', async (ctx, next) => {
        const plvalue = await ctx.Model.findById(ctx.params.id)
        ctx.body = plvalue
    })

    // 上传文件
    const filepath = path.join(__dirname, '../../uploads')
    const upload = multer({ dest: filepath })
    router.post('/file/upload', authMiddleware(), upload.single('file'), async (ctx, next) => {
        const file = ctx.request.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        ctx.body = file
    })


    // 登录
    router.post('/login', async (ctx, next) => {
        const { username, password } = ctx.request.body
        const user = await AdminUser.findOne({ username }).select('+password')

        // 校验用户名
        ctx.assert(user, 422, 'User is not exist');

        // 校验密码
        const isVaild = require('bcrypt').compareSync(password, user.password)
        ctx.assert(isVaild, 422, 'password is wrong');

        // 3.返回token
        const token = jwt.sign({ id: user._id }, 'i2u34y12oi3u4y8')
        ctx.body = { token }

    })


    app.use(handler)
    app.use(router.routes()).use(router.allowedMethods());
}