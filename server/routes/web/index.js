module.exports = app => {
    const Router = require('koa-router')
    const multer = require('@koa/multer')
    const path = require('path')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const mongoose = require('mongoose')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')

    // const handler = async (ctx, next) => {
    //     try {
    //       await next();
    //     } catch (err) {
    //       ctx.response.status = err.statusCode || err.status || 500;
    //       ctx.response.body = {
    //         message: err.message
    //       };
    //     // 服务器端日志输出，如果错误被try...catch捕获，就不会触发error事件。这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效
    //     // ctx.app.emit('error', err, ctx); 
    //     }
    // };

    // app.on('error', (err, ctx) => {
    //     console.log('logging error ', err, ctx);
    // });


    // const authMiddleware = require('../../middleware/auth')
    // const resourceMiddleware = require('../../middleware/resource')

    const router = new Router({
        prefix: '/web'
    })

    // router.use('/api/:resource', authMiddleware(), resourceMiddleware())



    // 创建资源
    // router.post('/api/:resource', async (ctx, next) => {
    //     const data = ctx.request.body
    //     const product = await ctx.Model.create(data)
    //     ctx.body = product
    // })

    // 删除资源
    // router.delete('/api/:resource/:id', async (ctx, next) => {
    //     await ctx.Model.findByIdAndDelete(ctx.params.id, ctx.request.body)
    //     ctx.body = {
    //         success: true
    //     }
    // })

    // 更新资源
    // router.put('/api/:resource/:id', async (ctx, next) => {
    //     const data = await ctx.Model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    //     ctx.body = data
    // })

    // 获取数据
    router.get('/news/init', async (ctx, next) => {
        const parent = await Category.findOne({
            name: '新闻资讯'
        })
        const cats = await Category.find().where({
            parent: parent
        }).lean()
        const newsTitles = ["峡谷四美明星集结，给你一个免费COS的机会！", "全民赢官方周边", "“新文创”下的探索与实践：王者荣耀x越剧文化论坛展开跨界对话", "腾讯天美工作室群IP探索新动作，《魂斗罗：归来》联动《终结者》！", "皮影婉儿、人偶婉儿、纸雕婉儿、板绘婉儿...你Pick哪一个？", "11月12日全服不停机更新公告", "11月12日体验服停机更新公告", "亲密度道具使用异常说明", "11月8日体验服停机更新公告", "11月7日体验服停机更新公告", "KPL季后赛开赛 参与活动送好礼", "告别孤单 浪漫峡谷陪你狂欢 秒杀皮肤限时返场", "感恩有你 李白新星元登场 峡谷全新福利来袭", "【周年许愿树】活动公告", "【周年庆典 明星抽内测】活动公告", "微赛事专题赛再度开启，为城市荣耀而战！", "双倍积分“通道”再次开启  城市探秘活动邀你竞猜本周入围队伍", "佛山“舞狮”助兴  城市赛全国半决赛精彩对抗即将来临！", "十校王者少年即将抵达战场, 王者荣耀高校联赛第三周火热备战！", "【KPL今日预报】DYG.JC vs EDG.M，DYG.JC目标胜者组"]
        const newsList = newsTitles.map(title => {
            const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
            return {
                categories: randomCats.slice(0, 2),
                title: title
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newsList)
        ctx.body = newsList
    })

    router.get('/news/list', async (ctx, next) => {
        const parent = await Category.findOne({
            name: '新闻资讯'
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: { $slice: ['$newsList', 5] }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                categories: { $in: subCats }
            }).populate('categories').limit(5).lean()
        })
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '热门')
                    ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        ctx.body = cats
    })

    // 获取带参数据
    // router.get('/api/:resource/:id', async (ctx, next) => {
    //     const plvalue = await ctx.Model.findById(ctx.params.id)
    //     ctx.body = plvalue
    // })

    // 上传文件
    // const filepath = path.join(__dirname, '../../uploads')
    // const upload = multer({ dest: filepath })
    // router.post('/file/upload', authMiddleware(), upload.single('file'), async (ctx, next) => {
    //     const file = ctx.request.file
    //     file.url = `http://localhost:3000/uploads/${file.filename}`
    //     ctx.body = file
    // })


    // 登录
    // router.post('/login', async (ctx, next) => {
    //     const { username, password } = ctx.request.body
    //     const user = await AdminUser.findOne({ username }).select('+password')

    //     // 校验用户名
    //     ctx.assert(user, 422, 'User is not exist');

    //     // 校验密码
    //     const isVaild = require('bcrypt').compareSync(password, user.password)
    //     ctx.assert(isVaild, 422, 'password is wrong');

    //     // 3.返回token
    //     const token = jwt.sign({ id: user._id }, 'i2u34y12oi3u4y8')
    //     ctx.body = { token }

    // })


    // app.use(handler)
    app.use(router.routes()).use(router.allowedMethods());
}