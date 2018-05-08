# 喵与猫寻 Meowcat - 后端 [![build status](https://www.travis-ci.org/jer0701/meowcat.svg?branch=master)](https://www.travis-ci.org/jer0701/meowcat)

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+


## 项目结构
```sh
Meowcat
├── app 
  ├── base        
    └── basecontroller.ts # 自定义 controller 基类
  ├── controller  # controller 目录
  ├── model     # model 目录
  ├── service     # service 目录
  └── router.ts   # 路由管理
├── config  
  ├── config.default.ts  # 默认配置
  ├── config.default.ts  # 本地开发环境配置
  ├── config.default.ts  # 生产环境配置
  └── plugin.ts          # 插件配置
├── test/app 
  ├── controller  # controller 相关测试用例
  └── service     # service 相关测试用例
├── typings  
  └── index.d.ts  # typescript 扩展配置
└── app.ts        # 本地开发测试使用，启动时创建数据库表
```
