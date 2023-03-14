import koa from 'koa'
import { resolve } from 'path'
import { routerLoad } from './utils'

const app: koa = new koa()

;(global as any).App = app

routerLoad(resolve(__dirname, './routes'))
app.listen(8000)
