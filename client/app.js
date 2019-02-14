/**
 * 作为 client，跨域获取 /api/getList 数据
 */

const Koa = require('koa');
// 使用中间件进行路由控制
const controller = require('./routerController');
const app = new Koa();



// 解析路由
app.use(controller());

// 在端口3000监听:
app.listen(7777);
console.log('app started at port 7777...');
