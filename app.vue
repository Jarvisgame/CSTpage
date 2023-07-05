<template>
  <div class="h-full">
    <div
      id="scroll-detector"
      class="absolute"
      style="top: 0;"
    />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { IDevice } from 'plugins/Device';

const $device = useNuxtApp().$device as IDevice

onMounted(async ( ) => {
  const device = $device
  device.origin = window.location.origin || ''
  device.isTop = true

  window.addEventListener('resize', onResize)
  onResize()

  if (window.IntersectionObserver) {
    const scrollObserver = new IntersectionObserver((entries) => {
      device.isTop = entries[0].isIntersecting
    })
    scrollObserver.observe(document.getElementById('scroll-detector')!)
  }
})

let resizingTimer: any = null

function onResize(lastTime: any = true) {
  if (resizingTimer) {
    clearTimeout(resizingTimer)
  }

  const width = document.documentElement.clientWidth
  const windowWidth = window.innerWidth
  $device.containerWidth = width
  $device.windowWidth = windowWidth
  if (windowWidth >= 1536) {
    $device.containerWidth = 1536
  } else if (windowWidth >= 1280) {
    $device.containerWidth = 1280
  } else if (windowWidth >= 1024) {
    $device.containerWidth = 1024
  } else if (windowWidth >= 768) {
    $device.containerWidth = 768
  } else if (windowWidth >= 640) {
    $device.containerWidth = 640
  }

  const w1 = window.innerWidth
  const w2 = document.documentElement.clientWidth

  const minWidth = Math.min(w1, w2)
  const maxWidth = Math.max(w1, w2)

  const h1 = window.innerHeight
  const h2 = document.documentElement.clientHeight

  const minHeight = Math.min(h1, h2)
  const maxHeight = Math.max(h1, h2)

  // -0.5 是因为页面缩放可能会导致实际大小有误差，致使滚动条出现
  $device.width = minWidth - 0.5
  $device.height = minHeight - 0.5

  // $device.hasVerticalScrollBar = maxHeight !== minHeight
  // $device.hasHorizontalScrollBar = maxWidth !== minWidth

  $device.isMobile = $device.width <= 768
  $device.rem = parseFloat(getComputedStyle(document.documentElement).fontSize)

  $device.iHeight = window.innerHeight

  if (lastTime !== false) {
    resizingTimer = setTimeout(() => {
      onResize(false)
    }, 100)
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

</script>