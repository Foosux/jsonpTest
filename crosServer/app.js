/**
 * 作为 server，提供接口数据
 */

const Koa = require('koa');
// 路由控制
const router = require('koa-router')();

const app = new Koa();

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>server启动成功，提供JSONP支持</h1>`
})

// 处理JSONP请求
router.get('/jsonp/getResult', async (ctx, next) => {
  let params =  ctx.request.query
  console.log('query params:', params)
  ctx.response.body = `${params.callback}({
    price: 19999,
    tickets: 10
  })`
})

// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(8888);
console.log('app started at port 8888...');
