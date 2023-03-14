import { Context } from 'koa'
import { Get, Post, Put, Delete } from '../utils'

export default class TestRouter {
  @Get('/get')
  get(ctx: Context) {
    ctx.body = {
      code: 'get'
    }
  }

  @Post('/post')
  post(ctx: Context) {
    ctx.body = {
      code: 'post'
    }
  }

  @Put('/put')
  put(ctx: Context) {
    ctx.body = {
      code: 'put'
    }
  }

  @Delete('/delete')
  delete(ctx: Context) {
    ctx.body = {
      code: 'delete'
    }
  }
}
