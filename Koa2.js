const Koa = require('koa');
const app = new Koa();
app.use(async ctx=> {
    ctx.body = 'hello Koa';
})
app.listen(3000,()=>{
    console.log('server start port 3000');
})