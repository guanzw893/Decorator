import koa from 'koa'
import * as glob from 'glob'
import Router from 'koa-router'
import { resolve } from 'path'

export const Route =
  (prefix?: string): ClassDecorator =>
  () => {
    ;(Route as any).router = new Router({ prefix })
  }

const Method =
  (method: 'post' | 'get' | 'put' | 'delete') =>
  (path: string): MethodDecorator =>
  (target: Object, propertyKey: string | symbol) => {
    process.nextTick(() => {
      const router: Router = (Route as any).router || new Router()
      router[method](path, (target as any)[propertyKey])
      const app: koa = (global as any).App
      app.use(router.routes()).use(router.allowedMethods())
    })
  }

export const Post = Method('post')
export const Get = Method('get')
export const Put = Method('put')
export const Delete = Method('delete')

export const routerLoad = (folder: string) => {
  glob
    .globSync(resolve(folder, `./*.{js,ts}`).replaceAll('\\', '/'))
    .forEach((item) => require(item))
}
