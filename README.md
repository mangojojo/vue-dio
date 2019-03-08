# vue-dio

## 简介

以 vue-cli3.0 作为基础的样本工程，用于个人开发 vue 相关项目的模板

## 安装&运行

```bash
$ git clone https://github.com/mangojojo/vue-dio.git
$ cd vue-dio
$ npm install
```

```shell
# 开发
$ npm run serve

# 打包
$ npm run build
```

## 工程结构

```
├── README.md   项目介绍
├── yarn.lock   npm包版本锁定控件
├── vue.config.js   项目配置文件
├── package.json    安装包配置文件
├── babel.config.js    babel配置文件（控制兼容性）
├── .postcssrc.js   postcss配置文件（控制代码格式化）
├── .gitgnore   上传忽略配置文件
├── .eslintrc.js    eslint配置文件
├── .browserslistrc    编辑器配置文件
├── src
│  ├── api  接口文件夹
│  │  └── index.js  接口封装及初始化
│  ├── assets  静态资源文件夹
│  ├── components  组件文件夹
│  ├── lib  工具包文件夹
│  │  └── util.js  常用工具函数文件
│  ├── router  路由文件夹
│  │  └── index.js  主路由初始化
│  │  └── router.js   路由配置文件
│  ├── views    试图文件夹
├── App.vue    主入口页面
├── main.js     主入口配置文件
├── public
│  ├── favicon.ico  标签页图标
│  ├── index.html   html页面

```

## 安装包配置

```
"dependencies": {
        "axios": "^0.18.0", // ajax请求文件
        "css-loader": "^2.1.0", // css样式写入
        "normalize.css": "^8.0.1",  // 页面css初始化
        "style-loader": "^0.23.1",  // style样式写入
        "vue": "^2.6.6",    // 基础开发框架
        "vue-router": "^3.0.1"  //  路由文件
    },
    "devDependencies": {
        "@vue/cli-plugin-babel": "^3.0.0",  // 语法兼容性插件
        "@vue/cli-plugin-eslint": "^3.0.0",
        "@vue/cli-service": "^3.0.0",   // 项目运行控制插件
        "babel-eslint": "^10.0.1",
        "eslint": "^5.8.0", // 代码格式监测插件
        "eslint-plugin-vue": "^5.0.0",
        "node-sass": "^4.9.0",  // sass编译工具
        "sass-loader": "^7.1.0",    // sass样式写入
        "vue-template-compiler": "^2.5.21"  // 模板预编译插件
    }
```

## 说明

模板暂未增加功能

1. vuex、mockjs、ui 框架引入
2. 划分生产及开发环境的 config 相关配置
3. webpack 进一步的打包配置
