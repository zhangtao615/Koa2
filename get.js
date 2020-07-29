//koa2中实现get请求
const Koa = require('koa');
const app = new Koa();

app.use(async ctx=>{
    let url = ctx.url;
    let query = ctx.query;
    let queryString = ctx.querystring;
    ctx.body = {
        url,
        query,//返回的是格式化好的参数对象
        queryString//返回的是格式化好的字符串
    }
});

app.listen(3000,()=>{
    console.log('server start port 3000');
})