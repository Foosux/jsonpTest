# JSONP实例

> `jsonp`(JSON with Padding)，是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。本实例例基于`KOA`和`Jquery`搭建，可用来观测`JSONP请求`的整个过程，加深理解。

## 启动

```js
// 拉取项目
git clone git@github.com:Foosux/jsonpTest.git

// 安装依赖
cd jsonpTest
npm i

// 启动 client 和 server 两个服务
npm run start:client    // 0.0.0.0:7777
npm run start:server    // 0.0.0.0:8888
```
## 观察测试

> `client/views/index.html` 为前端实现
> `crosServer/app` 为服务器端实现

- script 的 `src` 不受同源策略限制
- JS 天然支持 json 格式
- 动态生成 `<script src='...'></script>`
- Jquery的实现方式
