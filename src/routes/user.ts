import { Route, Get, Post } from '../utils'
import * as Koa from 'koa'

const users = [{ name: 'tom', age: 20 }]
@Route('/api')
export default class User {
  @Get('/users')
  public async list(ctx: Koa.Context) {
    ctx.body = { ok: 1, data: users }
  }

  @Post('/users')
  public add(ctx: Koa.Context) {
    ctx.body = { ok: 1 }
  }
}
