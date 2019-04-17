# jia-music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 目录结构

``` dos?linenums
| - /dist                   # npm run build 生成的生产环境目录
| - /node_modules           # 开发环境依赖包目录
| - /public                 # 静态资源目录
    | - /imgs               # 默认静态资源
    | - /m                  # mock data music 静态资源
    | - /p                  # mock data picture 静态资源
    | - /v                  # mock data video 静态资源
    | - favicon.ico         # 网站站点小图标
    | - index.html          # 单页面项目页面入口
| - /src                    # 项目的主要源码目录
    | - /api                # 配置 http 请求
    | - /bus                # vue 非父子组件通信
        | - scroll.js       # 实现滚动加载
    | - /components         # 页面组件
    | - /layouts            # 页面布局
    | - /mock               # 假数据
    | - /plugins            # vue 插件
    | - /router             # 路由 vue-router
    | - /stroe              # 状态管理 vuex
    | - /utils              # 其他工具
        | - /localStorage   # 数据持久化
    | - /views              # 视图
    | - App.vue             # 根模板
    | - base.styl           # 去除默认样式
    | - main.js             # 入口文件
| - .env.development        # 同一参数在开发环境和生产环境不同的赋值
| - .env.production         # 同一参数在开发环境和生产环境不同的赋值
| - .gitignore              # git 忽略配置
| - babel.config.js         # babel 配置
| - package-lock.json       # npm install 后，本地实际依赖文件
| - package.json            # 项目依赖配置
| - README.md               # 备注一些信息
| - vue.config.js           # vue 脚手架的配置文件，主要配置 webpack
```