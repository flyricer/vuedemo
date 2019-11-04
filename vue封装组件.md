# 一、封装组件
## 1. vue create project > default 最简模式
## 2. 新建文件夹packages，文件夹下新建一个index.js，作为暴露所有组件、插件的入口:
```
// 导入单个组件
import ComponentName from './ComponentName/index'

// 以数组的结构保存组件，便于遍历
const components = [
    ComponentName
]

// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}
//全局直接引入时自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}
```

然后每个组件都用单独的文件夹管理，形式与外层相同，index.js作入口，文件存组件：
```
// 导入组件，组件必须声明 name
import ComponentName from './main.vue'

// 为组件添加 install 方法，用于按需引入
ComponentName.install = function (Vue) {
    Vue.component(ComponentName.name, ComponentName)
}

export default ComponentName
```

## 3. 将src改为examples，并用examples来进行插件的本地测试，但前提是要修改vue.config.js的配置，将项目入口由src改为examples：
```
module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  }
}
```
# 二、上传到npm
## 1. 创建.npmignore文件，将不需要上传到npm的文件筛除掉，跟.gitignore一样，如：
```
.DS_Store
node_modules/
examples/
packages/
public/
vue.config.js
babel.config.js
*.map
*.html

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```
## 2. 库文件打包
vue-cli 3.x提供了[库文件打包命令](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%94%E7%94%A8)，主要需要四个参数：
1. target: 默认为构建应用，改为 lib 即可启用构建库模式
2. name: 输出文件名
3. dest: 输出目录，默认为 dist，这里我们改为 lib
4. entry: 入口文件路径，默认为 src/App.vue，这里改为 packages/index.js

在 package.json 里的 scripts 添加一个 lib 命令:
```
// pageage.json
{
  "scripts": {
    "lib": "vue-cli-service build --target lib --name ComponentName --dest lib packages/index.js"
  }
}
```
在最上行添加组件信息：
name: 包名，该名不能和已有的名称冲突；
version: 版本号，不能和历史版本号相同；
description: 简介；
main: 入口文件，应指向编译后的包文件；
private：是否私有，需要修改为 false 才能发布到 npm；
license：开源协议。
author：作者；

```
  "name": "ComponentName",
  "version": "0.1.1",
  "description": "A Component Library for Vue.js",
  "main": "lib/ComponentName.umd.min.js",
  "private": false,
  "license": "MIT",
  "author": "author",
```
然后执行 npm run lib 命令，编译组件，这时就会多出一个 lib 文件夹，里面有上面 'main' 中设置的 ComponentName.umd.min.js 文件。

## 3. 发布到npm

如果以前改过 npm 的镜像地址，比如使用了淘宝镜像，就先改回来：
```
npm config set registry http://registry.npmjs.org
```
登录：npm login

发包：npm publish

撤销发布包：npm unpublish 包名 --force

一般情况下不提倡撤销包，如果你的包已经被人引用，撤销会令他人项目出现问题。所以最好的处理方法是：
```
npm deprecate <pkg>[@<version>] <message>
```
使用这个命令，并不会在社区里撤销你已有的包，但会在任何人尝试安装这个包的时候得到警告
例如：npm deprecate penghuwanapp '这个包我已经不再维护了哟～'

更新发布后的包：步骤是：修改包的版本（package.json里的version字段) > npm publish