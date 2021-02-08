const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'To-do'
})

app.listen(3000)
