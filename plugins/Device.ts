import { defineNuxtPlugin, reactive } from '#imports'
import { useClickPosition } from 'vooks'
import { useLongPress } from '~/composables/useLongpress'

export interface IDevice {
  width: number
  windowWidth: number
  height: number
  containerWidth: number
  iHeight: number
  isMobile: boolean
  isApp: boolean
  isTouch: boolean // 是否为触屏设备

  // hasVerticalScrollBar: boolean
  // hasHorizontalScrollBar: boolean

  isTop: boolean // 滚动条是否位于页面顶部

  clickPosition: { x: number, y: number } | any

  from?: string
  origin?: string
  rem: number
}

function isApp(userAgent: string) {
  return !!userAgent.match(/(AppleWebKit.*Mobile.*)|(Html5Plus)/)
}

declare module '#app' {
  // @ts-ignore
  interface NuxtApp {
    $device: IDevice
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $device: IDevice
  }
}


export default defineNuxtPlugin((ctx) => {
  let userAgent = ''
  let origin = ''
  let isTouch = false
  let clickPosition
  if (process.client) {
    userAgent = navigator.userAgent
    origin = window.location.origin
    isTouch = 'ontouchstart' in window
    clickPosition = useClickPosition()
    useLongPress()
  } else if (ctx.req && (ctx.req as any).headers) {
    userAgent = (ctx.req as any).headers['user-agent'] = ''
    origin = (ctx.req as any).headers.referer || ''
    isTouch = false
    clickPosition = { x: 0, y: 0 }
  }

  const device = reactive<IDevice>({
    width: 1024,
    windowWidth: 1024,
    containerWidth: 1024,
    height: 768,
    rem: 16,
    iHeight: 768,
    isMobile: isApp(userAgent),
    isApp: isApp(userAgent),
    isTouch,
    isTop: true,
    clickPosition: clickPosition,
    origin,
  })

  ctx.vueApp.config.globalProperties.$device = device

  return {
    provide: {
      device: device,
    },
  }
})