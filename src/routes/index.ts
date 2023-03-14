import * as Koa from 'koa'
const users = [{ name: 'tom', age: 20 }]
import { Get, Post, Put, Delete } from '../../src/core'

export default class User {
  @Get('/users')
  list(ctx: Koa.Context) {
    ctx.body = { ok: 1, data: users }
  }

  @Post('/users')
  add(ctx: Koa.Context) {
    ctx.body = { ok: 1 }
  }
}
